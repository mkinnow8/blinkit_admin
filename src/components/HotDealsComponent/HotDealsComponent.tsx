import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {productList} from '../../utilities/dataObjects';
import ProductCardComponent from '../ProductCardComponent/ProductCardComponent';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {COLORS} from '../../resources';

type Props = {};

export const HotDealsComponent = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.featureContainer}>
        <View style={styles.featureHeader}>
          <Text style={styles.featureTitle}>Hot deals by Bonn</Text>
          <TouchableOpacity
          // onPress={() => {
          //   navigation.navigate("AllFeatureProduct", {
          //     products: feature.products,
          //     title: feature.title,
          //   });
          // }}
          >
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.productsContainer}>
          {productList.map(product => {
            return (
              <View key={product.id} style={styles.productContainer}>
                <ProductCardComponent product={product} />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: responsiveHeight(12),
    paddingHorizontal: responsiveWidth(12),
  },
  featureContainer: {
    marginBottom: responsiveHeight(16),
  },
  featureHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: responsiveHeight(8),
  },
  featureTitle: {
    fontSize: respFontSize(16),
    fontWeight: '600',
    color: COLORS.BLACK,
  },
  seeAll: {
    color: COLORS.GREEN,
    fontWeight: '600',
  },
  productsContainer: {},
  productContainer: {
    marginRight: responsiveWidth(12),
  },
});
