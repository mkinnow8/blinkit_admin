import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS, ROUTE} from '../../resources';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {banner} from '../../assets';

type Props = {};

export const FloatingCategoryComponent = (props: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(ROUTE.CATEGORIES as never)}
      style={{
        position: 'absolute',
        height: responsiveWidth(72),
        width: responsiveWidth(72),
        backgroundColor: COLORS.BLACK,
        borderRadius: 100,
        zIndex: 10,
        bottom: responsiveHeight(120),
        right: responsiveWidth(10),
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={banner}
        style={{height: responsiveHeight(32), width: responsiveWidth(32)}}
      />
      <Text
        style={{
          color: COLORS.WHITE,
          fontSize: respFontSize(7),
          fontWeight: '600',
        }}>
        CATEGORIES
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
