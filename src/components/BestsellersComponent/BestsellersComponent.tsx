import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {bestsellersList} from '../../utilities/dataObjects';
import BestsellerCard from './BestsellerCard';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {COLORS} from '../../resources';

type Props = {};

const BestsellersComponent = ({}: Props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Best Sellers</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}>
          {bestsellersList &&
            bestsellersList.map(bestseller => {
              return (
                <View key={bestseller.id} style={styles.cardContainer}>
                  <BestsellerCard bestseller={bestseller} />
                </View>
              );
            })}
        </ScrollView>
      </View>
    </>
  );
};

export {BestsellersComponent};

const styles = StyleSheet.create({
  container: {
    paddingVertical: responsiveHeight(12),
    paddingHorizontal: responsiveWidth(12),
    marginBottom: responsiveHeight(12),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: responsiveHeight(12),
  },
  title: {
    fontSize: respFontSize(16),
    color: COLORS.BLACK,
    fontWeight: 'bold',
  },
  seeAll: {
    color: COLORS.GREEN,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    // paddingHorizontal: 8,
  },
  cardContainer: {
    marginRight: responsiveWidth(12),
  },
});
