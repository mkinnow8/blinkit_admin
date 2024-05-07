import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {categoriesList} from '../../utilities/dataObjects';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {COLORS, ROUTE} from '../../resources';
import {bread, cookies2, cookies3} from '../../assets';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const CategoriesComponent = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shop by category</Text>
      <View style={styles.categoryContainer}>
        {categoriesList &&
          categoriesList.map(category => {
            return (
              <TouchableOpacity
                style={{
                  width: responsiveWidth(94),
                  marginRight: responsiveWidth(7),
                  marginBottom: responsiveHeight(12),
                }}
                key={category.id}
                onPress={() => {
                  navigation.navigate(ROUTE.SUB_CATEGORIES as never, {
                    category: category,
                  });
                }}>
                <View
                  style={{
                    backgroundColor: COLORS.LIGHT_BLUE_2,
                    borderRadius: 16,
                    padding: responsiveWidth(8),
                    marginBottom: responsiveHeight(4),
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: responsiveHeight(94),
                    width: responsiveWidth(94),
                  }}>
                  <Image source={category.image} style={styles.categoryImage} />
                </View>

                <Text
                  style={styles.categoryText}
                  numberOfLines={2}
                  ellipsizeMode="tail">
                  {category.title}
                </Text>
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
};

export {CategoriesComponent};

const styles = StyleSheet.create({
  container: {
    paddingVertical: responsiveHeight(12),
    paddingHorizontal: responsiveWidth(12),
  },
  title: {
    fontSize: respFontSize(16),
    color: COLORS.BLACK,
    fontWeight: 'bold',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: responsiveHeight(8),
  },
  categoryImage: {
    width: responsiveWidth(60),
    height: responsiveHeight(60),
  },
  categoryText: {
    fontSize: respFontSize(10),
    textAlign: 'center',
    color: COLORS.BLACK,
    fontWeight: 'bold',
  },
});
