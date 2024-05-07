import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomHeaderComponent} from '../../components';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {COLORS} from '../../resources';
import {useRoute} from '@react-navigation/native';
import {formatDate} from '../../utilities/dateFunctions';

type Props = {};

export const OrderDetailScreen = (props: Props) => {
  const route = useRoute();
  const order = route.params.order;
  const DELIVERY_CHARGE = 25;
  const HANDLING_CHARGE = 2;
  const calculateTotalDiscount = () => {
    let totalDiscount = 0;
    order.orderItems.forEach(item => {
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
      <CustomHeaderComponent title={''} />
      <ScrollView style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.headingText}>Order Summary</Text>
          <Text style={styles.lightText}>Arrived at {order.deliveryTime}</Text>
          <View style={styles.rowContainer}>
            <Text
              style={[
                styles.text,
                {color: COLORS.GREEN, marginRight: responsiveWidth(4)},
              ]}>
              Download Invoice
            </Text>
            <Icon
              name="tray-arrow-down"
              size={respFontSize(14)}
              color={COLORS.GREEN}
            />
          </View>
          <Text
            style={[styles.subHeadingText, {marginTop: responsiveHeight(8)}]}>
            {order.orderItems.length} items in this order
          </Text>
          {order.orderItems.map((item, index) => (
            <OrderComponent key={index} item={item} />
          ))}
        </View>
        {/* Billing Details */}
        <View style={styles.subContainer}>
          <Text style={[styles.headingText]}>Bill details</Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: COLORS.SILVER,
              marginVertical: responsiveHeight(8),
            }}
          />
          <BillDetailItem
            text={'Sub Total'}
            amount={order.orderTotal}
            amount2={calculateTotalDiscount()}
          />
          <BillDetailItem text={'Delivery charges'} amount={DELIVERY_CHARGE} />
          <BillDetailItem text={'Handling charges'} amount={HANDLING_CHARGE} />
          <View
            style={[
              styles.rowContainer,
              {justifyContent: 'space-between', marginTop: responsiveHeight(4)},
            ]}>
            <Text style={styles.subHeadingText}>Grand total</Text>
            <Text style={[styles.text, {fontWeight: '500'}]}>
              {' '}
              ₹{order.orderTotal + DELIVERY_CHARGE + HANDLING_CHARGE}
            </Text>
          </View>
        </View>
        {/* Order Details */}
        <View style={styles.subContainer}>
          <Text style={[styles.headingText]}>Order details</Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: COLORS.SILVER,
              marginVertical: responsiveHeight(8),
            }}
          />
          <OrderDetailItem text1={'Order Id'} text2={order.orderId} />
          <OrderDetailItem text1={'Payment'} text2={order.paymentMode} />
          <OrderDetailItem
            text1={'Deliver to'}
            text2={'Bestech Business Tower, phase 11, mohali'}
          />
          <OrderDetailItem
            text1={'Order placed'}
            text2={'placed on ' + formatDate(order.orderDate)}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Repeat Order</Text>
          <Text style={styles.lightBtnText}>View cart on next step</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

type orderItem = {item: CartItem};
const OrderComponent = ({item}: orderItem) => {
  return (
    <View style={[styles.rowContainer, {marginVertical: responsiveHeight(8)}]}>
      <Image source={item.productImage} style={styles.orderImage} />
      <View style={{flex: 1}}>
        <Text
          style={[styles.text, {fontWeight: 'bold'}]}
          numberOfLines={1}
          ellipsizeMode="tail">
          {item.productName}
        </Text>
        <Text style={styles.lightText}>{item.productUnits}</Text>
      </View>
      <View>
        <View style={[styles.rowContainer, {justifyContent: 'flex-end'}]}>
          {item.discountAvailable ? (
            <>
              <Text
                style={[
                  styles.lightText,
                  {
                    textDecorationLine: 'line-through',
                    marginRight: responsiveWidth(4),
                  },
                ]}>
                ₹{item.quantity * +item.actualPrice}
              </Text>
              <Text style={styles.text}>
                ₹{item.quantity * +item.discountPrice}
              </Text>
            </>
          ) : (
            <Text style={styles.text}>
              ₹{item.quantity * +item.actualPrice}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

type orderDetailItem = {text1: string; text2: string};
const OrderDetailItem = ({text1, text2}: orderDetailItem) => {
  return (
    <>
      <Text style={[styles.lightText, {marginVertical: responsiveHeight(2)}]}>
        {text1}
      </Text>
      <Text
        style={[
          styles.text,
          {marginVertical: responsiveHeight(2), fontWeight: '500'},
        ]}>
        {text2}
      </Text>
    </>
  );
};

type billDetailItem = {text: string; amount: number; amount2?: number};
const BillDetailItem = ({text, amount, amount2}: billDetailItem) => {
  return (
    <View style={[styles.rowContainer, {marginVertical: responsiveHeight(2)}]}>
      <Text style={[styles.text, {flex: 1}]}>{text}</Text>
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
    backgroundColor: COLORS.LIGHT_BLUE_3,
  },
  subContainer: {
    backgroundColor: COLORS.WHITE,
    padding: responsiveWidth(12),
    marginBottom: responsiveHeight(12),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingText: {
    color: COLORS.BLACK,
    fontSize: respFontSize(16),
    fontWeight: '900',
    marginBottom: responsiveWidth(2),
  },
  subHeadingText: {
    color: COLORS.BLACK,
    fontSize: respFontSize(13),
    fontWeight: '800',
    marginBottom: responsiveWidth(2),
  },
  text: {
    color: COLORS.BLACK,
    fontSize: respFontSize(11),
  },
  lightText: {
    color: COLORS.GREY,
    fontSize: respFontSize(11),
  },
  orderImage: {
    width: responsiveWidth(56),
    height: responsiveHeight(56),
    marginRight: responsiveWidth(8),
    borderWidth: 1,
    borderColor: COLORS.SILVER,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  button: {
    width: responsiveWidth(380),
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: COLORS.GREEN,
    paddingVertical: responsiveHeight(4),
    paddingHorizontal: responsiveWidth(8),
    marginBottom: responsiveHeight(12),
  },
  btnText: {
    color: COLORS.WHITE,
    textAlign: 'center',
    fontSize: respFontSize(14),
    fontWeight: 'bold',
  },
  lightBtnText: {
    color: COLORS.WHITE,
    textAlign: 'center',
    fontSize: respFontSize(10),
    textTransform: 'uppercase',
  },
});
