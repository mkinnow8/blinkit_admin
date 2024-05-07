import {
  Animated,
  FlatList,
  Image,
  PanResponder,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useCallback, useRef, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {COLORS} from '../../resources';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {categoriesList} from '../../utilities/dataObjects';
import {LargeProductCardComponent} from '../../components/LargeProductCardComponent/LargeProductCardComponent';
import {
  CustomHeaderComponent,
  FloatingCategoryComponent,
  FooterComponent,
} from '../../components';

type Props = {
  route: {
    params: {
      category: Category;
    };
  };
};

export const SubCategoriesScreen = ({route}: Props) => {
  const {category} = route.params;
  const navigation = useNavigation();
  const listRef1 = useRef<any>(0);
  const listRef2 = useRef<any>(0);
  const scrollY = useRef(new Animated.Value(0)).current;
  const [activeSubCategory, setActiveSubCategory] = useState(0);
  const [activePan, setActivePan] = useState(false);

  const handleSubCategoryPress = (index: number) => {
    setActiveSubCategory(index);
  };

  // const pan = useRef(new Animated.ValueXY()).current;
  // const panResponder = useRef(
  //   PanResponder.create({
  //     onStartShouldSetPanResponder: () => true,
  //     onPanResponderMove: Animated.event(
  //       [
  //         null,
  //         {
  //           dy: activePan ? pan.y : new Animated.Value(0),
  //         },
  //       ],
  //       {useNativeDriver: false},
  //     ),
  //     onPanResponderRelease: (e, gesture) => {
  //       console.log('Released', gesture);
  //       if (gesture.dy > 100) {
  //         console.log('Swiped down!');
  //         //   closeModal();
  //         resetPosition();
  //       } else {
  //         console.log('KUCH BHI!');
  //         resetPosition();
  //       }
  //     },
  //   }),
  // ).current;
  // const resetPosition = () => {
  //   Animated.spring(pan, {
  //     toValue: {x: 0, y: 0},
  //     useNativeDriver: false,
  //   }).start();
  // };

  const onViewableItemsChanged = useCallback(
    ({viewableItems, changed}: any) => {
      if (
        viewableItems[viewableItems.length - 1] &&
        viewableItems[viewableItems.length - 1].index ===
          category?.subCategories[activeSubCategory].productList.length - 1
      ) {
        setActivePan(true);
      } else {
        setActivePan(false);
      }
      // console.log('Changed in this iteration', changed);
      // if (viewableItems[0]) {
      //   if (viewableItems[0].index === imageCarousalData.length - 1) {
      //     scrollRef.current.scrollToIndex({
      //       index: 0,
      //       animated: true,
      //     });
      //     setCurrentImage(0);
      //   }
      //   setCurrentImage(viewableItems[0].index);
      // }
    },
    [activeSubCategory],
  );

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 100,
    minimumViewTime: 500,
  };
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <CustomHeaderComponent title={category.title} rightIcon={'magnify'} />
      <View
        style={{flex: 1, flexDirection: 'row', backgroundColor: COLORS.WHITE}}>
        {/* Sub Category List */}
        <View style={styles.sidebarContainer}>
          <FlatList
            ref={listRef1}
            showsVerticalScrollIndicator={false}
            data={category.subCategories}
            renderItem={({item, index}) => (
              <Pressable
                style={[
                  styles.sidebarItem,
                  activeSubCategory === index ? styles.activeSidebar : null,
                ]}
                onPress={() => handleSubCategoryPress(index)}>
                <View
                  style={[
                    styles.sidebarImageBackground,
                    activeSubCategory === index
                      ? styles.activeSidebarImageBackground
                      : null,
                  ]}>
                  <Image source={item.image} style={styles.sidebarImage} />
                </View>

                <Text style={styles.sidebarTitle}>{item.title}</Text>
              </Pressable>
            )}
            // ListFooterComponent={
            //   <View style={{height: responsiveHeight(64)}}></View>
            // }
          />
        </View>
        {/* Products List */}
        <Animated.View style={[styles.subCategoryList]}>
          <FlatList
            ref={listRef2}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            // onRefresh={() => {
            //   console.log('Refreshing');
            // }}
            // refreshing={false}
            // progressViewOffset={-300}
            viewabilityConfig={viewabilityConfig}
            onViewableItemsChanged={onViewableItemsChanged}
            onScroll={e => {
              scrollY.setValue(e.nativeEvent.contentOffset.y);
              // console.log('content size', e.nativeEvent.contentSize);
            }}
            data={category?.subCategories[activeSubCategory].productList}
            renderItem={({item, index}) => (
              <LargeProductCardComponent
                product={item}
                width={responsiveWidth(165)}
              />
            )}
            // ListFooterComponent={
            //   <View style={{height: responsiveHeight(64)}}></View>
            // }
          />
        </Animated.View>
      </View>
      <FloatingCategoryComponent />
      <FooterComponent />
    </>
  );
};

const styles = StyleSheet.create({
  sidebarContainer: {
    backgroundColor: COLORS.WHITE,
    width: responsiveWidth(72),
    borderRightWidth: 1,
    borderColor: COLORS.SILVER,
  },
  sidebarItem: {
    paddingVertical: responsiveHeight(6),
    paddingHorizontal: responsiveWidth(6),
    alignItems: 'center',
  },
  sidebarImage: {
    height: responsiveWidth(48),
    width: responsiveHeight(48),
  },
  sidebarTitle: {
    color: COLORS.DARK_GREY,
    fontSize: responsiveWidth(10),
  },
  sidebarImageBackground: {
    backgroundColor: COLORS.SILVER,
    borderRadius: 50,
    padding: responsiveHeight(2),
  },
  activeSidebarImageBackground: {
    backgroundColor: COLORS.LIGHT_GREEN,
  },
  activeSidebar: {
    borderRightWidth: 3,
    borderColor: COLORS.GREEN,
  },
  subCategoryList: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_BLUE,
    paddingHorizontal: responsiveWidth(8),
    paddingVertical: responsiveHeight(8),
  },
});
