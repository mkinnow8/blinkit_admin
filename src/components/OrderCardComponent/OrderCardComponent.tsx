import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, ROUTE} from '../../resources';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {formatDate} from '../../utilities/dateFunctions';
import {useNavigation} from '@react-navigation/native';

type Props = {
  order: Order;
};

export const OrderCardComponent = ({order}: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      {/* First row */}
      <TouchableOpacity
        style={styles.row}
        onPress={() => navigation.navigate(ROUTE.ORDER_DETAIL, {order})}>
        <View style={styles.iconBackground}>
          <Icon name="check" size={24} color="green" />
        </View>
        <View style={{flex: 1, marginLeft: responsiveWidth(8)}}>
          <Text style={styles.headingText}>{'Delivered in 10 Minutes'}</Text>
          <Text style={styles.text}>
            {'₹' + order.orderTotal + ' • ' + formatDate(order.orderDate)}
          </Text>
        </View>

        <Icon name="arrow-right" size={24} color="black" />
      </TouchableOpacity>

      {/* Second row */}
      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTE.ORDER_DETAIL, {order})}
        style={[
          styles.row,
          {
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: COLORS.SILVER,
          },
        ]}>
        {order.orderItems.slice(0, 6).map((item, index) => {
          return (
            <Image
              key={index}
              source={item.productImage}
              style={styles.cardImage}
            />
          );
        })}
      </TouchableOpacity>

      {/* Third row */}
      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.reorderButton]}>
          <Text style={styles.buttonText}>Reorder</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.rateButton]}>
          <Text style={styles.buttonText}>Rate Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(16),
    paddingVertical: responsiveHeight(12),
  },
  iconBackground: {
    backgroundColor: COLORS.LIGHT_GREEN,
    padding: responsiveWidth(8),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    color: COLORS.BLACK,
    fontSize: respFontSize(16),
    fontWeight: '800',
    marginBottom: responsiveWidth(2),
  },

  text: {
    color: COLORS.BLACK,
    fontSize: respFontSize(10),
  },

  cardImage: {
    width: responsiveWidth(56),
    height: responsiveHeight(56),
    marginRight: responsiveWidth(8),
    borderWidth: 1,
    borderColor: COLORS.SILVER,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(32),
  },
  reorderButton: {
    borderRightWidth: 1,
    borderColor: COLORS.SILVER,
  },
  rateButton: {},
  buttonText: {
    color: COLORS.GREEN,
    fontWeight: 'bold',
  },
});
