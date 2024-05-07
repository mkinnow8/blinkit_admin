import React, {useCallback, useEffect, useRef, useState} from 'react';
import {imageCarousalData} from '../../utilities/dataObjects';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';

type Props = {};

const CARD_WIDTH = Dimensions.get('window').width * 0.8;
const CARD_HEIGHT = Dimensions.get('window').height * 0.22;
const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 - 10;

export const ImageCarousalComponent = (props: Props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const scrollRef = useRef<any>();
  useEffect(() => {
    const intervalId = setInterval(() => {
      scrollRef.current.scrollToIndex({
        index: currentImage + 1,
        animated: true,
        viewOffset: responsiveWidth(34),
      });
      // console.log('scroll value ', currentImage);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentImage]);

  const onViewableItemsChanged = useCallback(
    ({viewableItems, changed}: any) => {
      // console.log('Visible items are', viewableItems);
      // console.log('Changed in this iteration', changed);
      if (viewableItems[0]) {
        if (viewableItems[0].index === imageCarousalData.length - 1) {
          scrollRef.current.scrollToIndex({
            index: 0,
            animated: true,
          });
          setCurrentImage(0);
        }
        setCurrentImage(viewableItems[0].index);
      }
    },
    [],
  );

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
    minimumViewTime: 1000,
  };
  return (
    <FlatList
      horizontal
      ref={scrollRef}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
      snapToEnd={false}
      disableIntervalMomentum={true}
      decelerationRate={0.9} // Disable deceleration
      snapToInterval={CARD_WIDTH + responsiveWidth(16)} // Calculate the size for a card including marginLeft and marginRight
      snapToAlignment="center" // Snap to the center
      // contentInset={{
      //   // iOS ONLY
      //   top: 0,
      //   left: SPACING_FOR_CARD_INSET, // Left spacing for the very first card
      //   bottom: 0,
      //   right: SPACING_FOR_CARD_INSET, // Right spacing for the very last card
      // }}
      // onScroll={e => {
      //   scrollX.setValue(+e.nativeEvent.contentOffset.x.toFixed(0));
      // }}
      contentContainerStyle={[styles.scrollView]}
      // contentOffset={{x: CARD_WIDTH - responsiveWidth(8), y: 0}}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged}
      data={imageCarousalData}
      renderItem={({item, index}) => {
        return (
          <View key={item.id} style={styles.imageContainer}>
            <Image
              source={{uri: item.image}}
              alt={item.title}
              style={styles.image}
            />
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginVertical: responsiveHeight(12),
  },
  imageContainer: {
    marginHorizontal: responsiveWidth(8),
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 8,
  },
});
