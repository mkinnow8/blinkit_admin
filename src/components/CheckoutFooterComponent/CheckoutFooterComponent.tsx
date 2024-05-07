import {
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {COLORS, ROUTE} from '../../resources';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {addOrder} from '../../redux/slices/OrdersSlice';
import {emptyCart} from '../../redux/slices/CartSlice';

type Props = {
  grandTotal: number;
};

function generateOrderID(length: number) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

export const CheckoutFooterComponent = ({grandTotal}: Props) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const {cartItems, totalItems, totalPrice} = useAppSelector(
    state => state.Cart,
  );

  const placeOrder = () => {
    dispatch(
      addOrder({
        orderId: generateOrderID(8),
        orderDate: new Date().toISOString(),
        orderStatus: 'Delivered',
        orderTotal: totalPrice,
        orderItems: cartItems,
        deliveryTime: '12:46 pm',
        paymentMode: 'Paid Online',
      }),
    );
    dispatch(emptyCart({}));
    navigation.navigate(ROUTE.HOME as never);
    ToastAndroid.show('Order Placed !', ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.rowContainer,
          {
            alignItems: 'flex-start',
            borderBottomWidth: 1,
            borderBottomColor: COLORS.SILVER,
            paddingVertical: 8,
            paddingHorizontal: responsiveWidth(12),
          },
        ]}>
        <Icon name="home" size={28} color={COLORS.GOLD} />
        <View style={{marginLeft: responsiveWidth(12), flex: 1}}>
          <Text style={styles.text}>Delivery to Home</Text>
          <Text style={styles.lightText}>
            Bestech Business Tower, phase 11, mohali
          </Text>
        </View>
        <Text style={[styles.text, {color: COLORS.GREEN}]}>Change</Text>
      </View>
      <View
        style={[
          styles.rowContainer,
          {
            justifyContent: 'space-between',
            paddingVertical: responsiveHeight(8),
            paddingHorizontal: responsiveWidth(12),
          },
        ]}>
        <View>
          <Text style={styles.text}>Pay Using</Text>
          <Text style={styles.text}>Google Pay UPI</Text>
        </View>
        <TouchableOpacity
          onPress={placeOrder}
          style={[styles.rowContainer, styles.button]}>
          <View>
            <Text style={[styles.text, {color: COLORS.WHITE}]}>
              ₹{grandTotal}
            </Text>
            <Text style={[styles.text, {color: COLORS.WHITE}]}>Total</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.buttonText}>Place order</Text>
            <Icon
              name="menu-right"
              size={respFontSize(20)}
              color={COLORS.WHITE}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: COLORS.BLACK,
    fontSize: respFontSize(10),
  },
  lightText: {
    color: COLORS.GREY,
    fontSize: respFontSize(10),
  },
  button: {
    justifyContent: 'space-between',
    width: responsiveWidth(200),
    borderRadius: 8,
    backgroundColor: COLORS.GREEN,
    paddingVertical: responsiveHeight(4),
    paddingHorizontal: responsiveWidth(8),
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: respFontSize(12),
    marginRight: responsiveWidth(-6),
    fontWeight: '600',
  },
});
