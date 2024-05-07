import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {storeByData} from '../../utilities/dataObjects';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {COLORS} from '../../resources';

type Props = {};

export const ShopByStoreComponent = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Shop by store</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <View
          style={{
            width: responsiveWidth(530),
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {storeByData.map(store => {
            return (
              <View key={store.id} style={styles.storeContainer}>
                <Image
                  source={{uri: store.image}}
                  alt={store.title}
                  style={styles.image}
                />
                <Text style={styles.storeTitle}>{store.title}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: responsiveHeight(12),
    paddingHorizontal: responsiveWidth(12),
  },
  heading: {
    fontSize: respFontSize(16),
    color: COLORS.BLACK,
    fontWeight: '600',
    marginBottom: responsiveHeight(8),
  },
  scrollView: {
    paddingHorizontal: responsiveWidth(4),
  },
  storeContainer: {
    width: responsiveWidth(80),
    marginRight: responsiveWidth(8),
    marginBottom: responsiveHeight(12),
  },
  image: {
    width: '100%',
    height: responsiveWidth(80),
    borderRadius: 8,
  },
  storeTitle: {
    textAlign: 'center',
    color: COLORS.BLACK,
    fontSize: respFontSize(10),
    fontWeight: '600',
    marginTop: responsiveHeight(4),
  },
});
