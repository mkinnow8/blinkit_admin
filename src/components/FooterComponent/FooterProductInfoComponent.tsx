import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {COLORS} from '../../resources';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {SetQuantityButtonComponent} from '../SetQuantityButtonComponent/SetQuantityButtonComponent';
import {addItemToCart, removeItemFromCart} from '../../redux/slices/CartSlice';

type Props = {
  product: Product | ProductOption;
};

export const FooterProductInfoComponent = ({product}: Props) => {
  const cartItems = useAppSelector(state => state.Cart.cartItems);
  const dispatch = useAppDispatch();
  const findItemInCart = () => {
    if (cartItems.length > 0) {
      const productId = product.id;
      const index = cartItems.findIndex(item => {
        return item.productId === productId;
      });
      return index;
    } else {
      return -1;
    }
  };
  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        productId: product.id,
        productParentId: product.parentId,
        productName: product.name,
        productImage: product.photos[0],
        actualPrice: product.actualPrize,
        discountPrice: product.discountPrize,
        productUnits: product.units,
        discountAvailable: product.discountAvailable,
        quantity: 1,
      }),
    );
  };
  const handleRemoveFromCart = () => {
    dispatch(
      removeItemFromCart({
        productId: product.id,
      }),
    );
  };
  return (
    <View
      style={[
        styles.rowContainer,
        {
          height: responsiveHeight(56),
          backgroundColor: COLORS.WHITE,
          justifyContent: 'space-between',
          paddingHorizontal: responsiveWidth(8),
        },
      ]}>
      <View>
        <Text style={styles.cartText}>{product?.units}</Text>
        {product?.discountAvailable ? (
          <View style={styles.rowContainer}>
            <Text style={styles.cartText}>₹{product.discountPrize}</Text>
            <Text style={{marginLeft: 6, fontSize: respFontSize(10)}}>
              MRP{' '}
            </Text>
            <Text
              style={{
                textDecorationLine: 'line-through',
                fontSize: respFontSize(10),
              }}>
              ₹{product.actualPrize}
            </Text>
            <Text
              style={{
                borderRadius: 3,
                marginLeft: responsiveWidth(8),
                padding: responsiveWidth(2),
                fontSize: respFontSize(8),
                color: COLORS.WHITE,
                fontWeight: '500',
                backgroundColor: COLORS.BLUE,
              }}>
              {product.discountOff} OFF
            </Text>
          </View>
        ) : (
          <Text style={styles.cartText}>MRP ₹{product?.actualPrize}</Text>
        )}
        <Text style={{color: COLORS.BLACK, fontSize: respFontSize(7)}}>
          {' (Inclusive of all taxes)'}
        </Text>
      </View>
      {findItemInCart() !== -1 ? (
        <View
          style={{
            alignItems: 'center',
            height: responsiveHeight(40),
            width: responsiveWidth(120),
            borderRadius: 8,
            backgroundColor: COLORS.GREEN,
          }}>
          <SetQuantityButtonComponent
            text={cartItems[findItemInCart()].quantity}
            onIncrement={handleAddToCart}
            onDecrement={handleRemoveFromCart}
          />
        </View>
      ) : (
        <TouchableOpacity
          onPress={handleAddToCart}
          style={[
            styles.rowContainer,
            {
              justifyContent: 'center',
              height: responsiveHeight(40),
              width: responsiveWidth(120),
              borderRadius: 8,
              backgroundColor: COLORS.GREEN,
              paddingVertical: responsiveHeight(8),
            },
          ]}>
          <Text
            style={{
              color: COLORS.WHITE,
              fontSize: respFontSize(12),
              marginRight: responsiveWidth(-6),
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Add to cart
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cartText: {
    fontSize: respFontSize(10),
    marginLeft: responsiveWidth(4),
    color: COLORS.BLACK,
    fontWeight: '500',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
