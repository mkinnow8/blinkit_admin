import {
  Animated,
  Image,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {COLORS, ROUTE} from '../../resources';
import {
  BestsellerModalComponent,
  BestsellersComponent,
  CategoriesComponent,
  FloatingCategoryComponent,
  FooterComponent,
  HeaderComponent,
  HotDealsComponent,
  ImageCarousalComponent,
  SearchBar,
  ShopByStoreComponent,
} from '../../components';
import {banner} from '../../assets';
import {useNavigation} from '@react-navigation/native';

type Props = {};

export const HomeScreen = (props: Props) => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={COLORS.WHITE}
        barStyle="dark-content"
      />
      <ScrollView
        stickyHeaderIndices={[1]}
        style={styles.container}
        showsVerticalScrollIndicator={false}>
        <HeaderComponent />
        <SearchBar />
        <BestsellersComponent />
        <ImageCarousalComponent />
        <CategoriesComponent />
        <ShopByStoreComponent />
        <HotDealsComponent />

        <View
          style={{
            height: responsiveHeight(300),
            paddingHorizontal: responsiveWidth(12),
            backgroundColor: '#fafcff',
          }}>
          <Text
            style={{
              marginTop: responsiveHeight(32),
              fontSize: respFontSize(40),
              fontWeight: '900',
              color: COLORS.WHITE_GREY,
            }}>
            India's last minute app ❤️
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: COLORS.SILVER,
              marginVertical: responsiveHeight(24),
            }}></View>
          <Text
            style={{
              fontSize: respFontSize(16),
              fontWeight: '900',
              color: COLORS.WHITE_GREY,
            }}>
            blinkit
          </Text>
        </View>
      </ScrollView>
      <FloatingCategoryComponent />
      <FooterComponent />
    </>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {},
  container: {
    paddingTop: responsiveHeight(24),
    backgroundColor: COLORS.WHITE,
  },
});
