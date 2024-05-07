import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../resources';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {SetQuantityButtonComponent} from '../SetQuantityButtonComponent/SetQuantityButtonComponent';
import {useAppDispatch} from '../../redux/hooks';
import {addItemToCart, removeItemFromCart} from '../../redux/slices/CartSlice';

type Props = {
  cartItem: CartItem;
};

const CartItemComponent = ({cartItem}: Props) => {
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        productId: cartItem.productId,
        productParentId: cartItem.productParentId,
        productName: cartItem.productName,
        productImage: cartItem.productImage,
        actualPrice: cartItem.actualPrice,
        discountPrice: cartItem.discountPrice,
        productUnits: cartItem.productUnits,
        discountAvailable: cartItem.discountAvailable,
        quantity: 1,
      }),
    );
  };
  const handleRemoveFromCart = () => {
    dispatch(
      removeItemFromCart({
        productId: cartItem.productId,
      }),
    );
  };
  return (
    <View style={styles.container}>
      <Image source={cartItem.productImage} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {cartItem.productName}
        </Text>
        <Text style={styles.lightText}>{cartItem.productUnits}</Text>
      </View>
      <View>
        <View
          style={{
            alignItems: 'center',
            height: responsiveHeight(28),
            width: responsiveWidth(64),
            borderRadius: 4,
            backgroundColor: COLORS.GREEN,
            marginBottom: responsiveHeight(4),
          }}>
          <SetQuantityButtonComponent
            text={cartItem.quantity}
            onIncrement={handleAddToCart}
            onDecrement={handleRemoveFromCart}
          />
        </View>
        <View style={[styles.rowContainer, {justifyContent: 'flex-end'}]}>
          {cartItem.discountAvailable ? (
            <>
              <Text
                style={[
                  styles.lightText,
                  {
                    textDecorationLine: 'line-through',
                    marginRight: responsiveWidth(4),
                  },
                ]}>
                ₹{cartItem.quantity * +cartItem.actualPrice}
              </Text>
              <Text style={styles.text}>
                ₹{cartItem.quantity * +cartItem.discountPrice}
              </Text>
            </>
          ) : (
            <Text style={styles.text}>
              ₹{cartItem.quantity * +cartItem.actualPrice}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};
export {CartItemComponent};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: COLORS.SILVER,
  },
  image: {
    width: responsiveWidth(50),
    height: responsiveWidth(50),
    marginRight: responsiveWidth(10),
    borderRadius: 8,
  },
  details: {
    flex: 1,
    marginRight: responsiveWidth(8),
  },
  title: {
    fontWeight: 'bold',
    color: COLORS.BLACK,
    marginBottom: responsiveHeight(2),
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lightText: {
    color: COLORS.GREY,
    fontSize: respFontSize(9),
  },
  text: {
    color: COLORS.BLACK,
    fontSize: respFontSize(9),
    fontWeight: '500',
  },
});
