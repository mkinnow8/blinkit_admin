import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {COLORS} from '../../resources';

type Props = {
  photos: any[];
  width: number;
  height: number;
  onPressEvent?: () => void;
};

const CustomCarousalComponent = ({
  photos,
  width,
  height,
  onPressEvent,
}: Props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const onViewableItemsChanged = useCallback(
    ({viewableItems, changed}: any) => {
      // console.log('Visible items are', viewableItems);
      // console.log('Changed in this iteration', changed);
      //   console.log('Active Category is', activeCategory);
      //   if (viewableItems[0] && currentImage != viewableItems[0].index) {
      //     console.log('setting index', viewableItems[0].index);
      if (viewableItems[0]) setCurrentImage(viewableItems[0].index);
      //   }
    },
    [],
  );

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };
  return (
    <>
      <FlatList
        horizontal
        pagingEnabled={true}
        snapToEnd={false}
        disableIntervalMomentum={true}
        decelerationRate={0.9} // Disable deceleration
        snapToAlignment="center" // Snap to the center
        contentContainerStyle={[styles.scrollView]}
        contentOffset={{x: 0, y: 0}}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged}
        showsHorizontalScrollIndicator={false}
        data={photos}
        renderItem={({item, index}) => {
          return (
            <TouchableWithoutFeedback
              style={styles.imageContainer}
              onPress={onPressEvent}>
              <Image
                source={item}
                style={[styles.image, {width: width, height: height}]}
              />
            </TouchableWithoutFeedback>
          );
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          zIndex: 20,
          paddingRight: responsiveWidth(12),
        }}>
        <Text
          style={[
            styles.dot,
            {color: 0 === currentImage ? COLORS.BLACK : COLORS.LIGHT_GREY},
          ]}>
          •
        </Text>
        <Text
          style={[
            styles.dot,
            {
              color:
                currentImage != 0 && currentImage != photos.length - 1
                  ? COLORS.BLACK
                  : COLORS.LIGHT_GREY,
            },
          ]}>
          •
        </Text>
        <Text
          style={[
            styles.dot,
            {
              color:
                photos.length - 1 === currentImage
                  ? COLORS.BLACK
                  : COLORS.LIGHT_GREY,
            },
          ]}>
          •
        </Text>
      </View>
    </>
  );
};

export {CustomCarousalComponent};

const styles = StyleSheet.create({
  scrollView: {},
  imageContainer: {},
  image: {},
  dot: {
    fontSize: 16,
    color: COLORS.LIGHT_GREY,
    fontWeight: 'bold',
    marginHorizontal: 1,
  },
});
