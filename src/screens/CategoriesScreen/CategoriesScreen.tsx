import {
  FlatList,
  Image,
  Pressable,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {categoriesList} from '../../utilities/dataObjects';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {COLORS} from '../../resources';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {useNavigation} from '@react-navigation/native';

type Props = {};

export const CategoriesScreen = (props: Props) => {
  const navigation = useNavigation();
  const [activeCategory, setActiveCategory] = useState(0);
  const listRef1 = useRef<any>(0);
  const listRef2 = useRef<any>(0);

  const scrollList1 = (index: number) => {
    listRef1.current.scrollToIndex({animated: true, index: index});
  };
  const scrollList2 = (index: number) => {
    listRef2.current.scrollToIndex({animated: true, index: index});
  };

  const handleCategoryPress = (index: number, scrollSecondList: boolean) => {
    setActiveCategory(index);
    if (scrollSecondList) {
      scrollList2(index);
    }
  };

  const onViewableItemsChanged = useCallback(
    ({viewableItems, changed}: any) => {
      // console.log('Visible items are', viewableItems);
      // console.log('Changed in this iteration', changed);
      // console.log('Active Category is', activeCategory);
      console.log('I am Scrolling');

      if (viewableItems[0] && activeCategory != viewableItems[0].index) {
        console.log('Index', viewableItems[0].index);
        console.log('Active', activeCategory);
        handleCategoryPress(viewableItems[0].index, false);
        if (activeCategory !== viewableItems[0].index) {
          scrollList1(viewableItems[0].index);
        }
      }
    },
    [activeCategory],
  );

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 5,
    minimumViewTime: 1000,
  };
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View
        style={{flex: 1, flexDirection: 'row', backgroundColor: COLORS.WHITE}}>
        <View style={styles.sidebarContainer}>
          <TouchableOpacity
            style={styles.sidebarHeader}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={28} color={COLORS.BLACK} />
          </TouchableOpacity>
          <FlatList
            ref={listRef1}
            showsVerticalScrollIndicator={false}
            data={categoriesList}
            renderItem={({item, index}) => (
              <Pressable
                style={[
                  styles.sidebarItem,
                  activeCategory === index ? styles.activeSidebar : null,
                ]}
                onPress={() => handleCategoryPress(index, true)}>
                <Image source={item.image} style={styles.sidebarImage} />
                <Text style={styles.sidebarTitle}>{item.title}</Text>
              </Pressable>
            )}
            ListFooterComponent={
              <View style={{height: responsiveHeight(64)}}></View>
            }
          />
        </View>
        <View style={styles.subCategoryList}>
          <FlatList
            ref={listRef2}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
            showsVerticalScrollIndicator={false}
            data={categoriesList}
            renderItem={({item, index}) => <SubCategoryList category={item} />}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  height: 1,
                  backgroundColor: COLORS.SILVER,
                }}
              />
            )}
            ListFooterComponent={
              <View style={{height: responsiveHeight(64)}}></View>
            }
          />
        </View>
      </View>
    </>
  );
};

type props2 = {
  category: Category;
};

const SubCategoryList = ({category}: props2) => {
  return (
    <View style={{paddingHorizontal: responsiveWidth(12)}}>
      <Text style={styles.categoryTitle}>{category.title}</Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {category.subCategories?.map(subCategory => {
          return (
            <View style={styles.subCategoryContainer} key={subCategory.id}>
              <View style={styles.subCategoryImageContainer}>
                <Image
                  source={subCategory.image}
                  style={styles.subCategoryImage}
                />
              </View>
              <Text style={styles.subCategoryTitle}>{subCategory.title}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebarContainer: {
    backgroundColor: COLORS.LIGHT_BLUE_2,
    width: responsiveWidth(72),
  },
  sidebarHeader: {
    alignItems: 'center',
    marginTop: responsiveHeight(32),
    marginBottom: responsiveHeight(16),
  },
  sidebarItem: {
    paddingVertical: responsiveHeight(12),
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

  activeSidebar: {
    backgroundColor: COLORS.WHITE,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  subCategoryList: {
    flex: 1,
    marginTop: responsiveHeight(32),
  },
  categoryTitle: {
    fontSize: respFontSize(16),
    color: COLORS.BLACK,
    fontWeight: 'bold',
    marginVertical: responsiveHeight(16),
  },
  subCategoryContainer: {
    width: responsiveWidth(100),
    marginRight: responsiveWidth(10),
    marginBottom: responsiveHeight(16),
  },
  subCategoryImageContainer: {
    backgroundColor: COLORS.LIGHT_BLUE_3,
    borderRadius: 10,
    paddingTop: responsiveHeight(32),
    paddingHorizontal: responsiveWidth(20),
  },
  subCategoryImage: {
    width: responsiveWidth(60),
    height: responsiveHeight(60),
  },
  subCategoryTitle: {
    fontSize: respFontSize(10),
    textAlign: 'center',
    color: COLORS.BLACK,
    fontWeight: 'bold',
  },
});
