import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {
  CheckoutFooterComponent,
  CustomHeaderComponent,
  FooterComponent,
} from '../../components';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {COLORS} from '../../resources';
import {CartItemComponent} from '../../components/FooterComponent/CartItemComponent';
import {useAppSelector} from '../../redux/hooks';
import {useNavigation} from '@react-navigation/native';

type Props = {};

export const CheckoutScreen = (props: Props) => {
  const navigation = useNavigation();
  const {cartItems, totalItems, totalPrice} = useAppSelector(
    state => state.Cart,
  );
  const DELIVERY_CHARGE = 25;
  const HANDLING_CHARGE = 2;
  if (cartItems.length === 0) {
    navigation.goBack();
  }
  const calculateTotalDiscount = () => {
    let totalDiscount = 0;
    cartItems.forEach(item => {
      if (item.discountAvailable) totalDiscount += +item.actualPrice;
    });
    return totalDiscount;
  };
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <CustomHeaderComponent title={'Checkout'} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.subContainer}>
          <View
            style={[
              styles.rowContainer,
              {
                paddingVertical: 8,
              },
            ]}>
            <Icon name="timer-outline" size={24} color={COLORS.BLACK} />
            <View style={{marginLeft: responsiveWidth(12)}}>
              <Text style={styles.headingText}>Delivery in 10 Minutes</Text>
              <Text>Shipment of {totalItems} items</Text>
            </View>
          </View>
          {cartItems.map((item, index) => (
            <CartItemComponent key={index} cartItem={item} />
          ))}
        </View>
        {/* Billing Details */}
        <View style={styles.subContainer}>
          <Text style={styles.headingText}>Bill details</Text>
          <BillingDetailComponent
            leftIcon={'receipt'}
            text={'Sub total'}
            amount2={calculateTotalDiscount()}
            amount={totalPrice}
          />
          <BillingDetailComponent
            leftIcon={'moped'}
            text={'Delivery charge'}
            amount={DELIVERY_CHARGE}
          />
          <BillingDetailComponent
            leftIcon={'shopping'}
            text={'Handling charges'}
            amount={HANDLING_CHARGE}
          />
          <View
            style={[
              styles.rowContainer,
              {justifyContent: 'space-between', marginTop: responsiveHeight(4)},
            ]}>
            <Text style={styles.subHeadingText}>Grand total</Text>
            <Text style={[styles.text, {fontWeight: '500'}]}>
              {' '}
              ₹{totalPrice + HANDLING_CHARGE + DELIVERY_CHARGE}
            </Text>
          </View>
        </View>
        {/* Footer */}
      </ScrollView>
      <CheckoutFooterComponent
        grandTotal={totalPrice + HANDLING_CHARGE + DELIVERY_CHARGE}
      />
    </>
  );
};

type BillingDetail = {
  leftIcon: string;
  text: string;
  amount: number;
  amount2?: number;
};
const BillingDetailComponent = ({
  leftIcon,
  text,
  amount,
  amount2,
}: BillingDetail) => {
  return (
    <View style={[styles.rowContainer, {marginVertical: responsiveHeight(1)}]}>
      <Icon name={leftIcon} size={12} color={COLORS.BLACK} />
      <Text style={[styles.text, {flex: 1, marginLeft: responsiveWidth(8)}]}>
        {text}
      </Text>
      {amount2 ? (
        <Text style={[styles.lightText, {textDecorationLine: 'line-through'}]}>
          ₹{amount2}
        </Text>
      ) : null}
      <Text style={styles.text}> ₹{amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: responsiveHeight(8),
    backgroundColor: COLORS.LIGHT_BLUE_3,
  },
  subContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 12,
    padding: responsiveWidth(12),
    marginVertical: responsiveHeight(8),
    marginHorizontal: responsiveWidth(12),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingText: {
    color: COLORS.BLACK,
    fontSize: respFontSize(14),
    fontWeight: '600',
    marginBottom: responsiveWidth(2),
  },
  subHeadingText: {
    color: COLORS.BLACK,
    fontSize: respFontSize(12),
    fontWeight: '500',
    marginBottom: responsiveWidth(2),
  },
  text: {
    color: COLORS.BLACK,
    fontSize: respFontSize(10),
  },
  lightText: {
    color: COLORS.GREY,
    fontSize: respFontSize(10),
  },
});
