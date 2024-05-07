import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import React, {useState} from 'react';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {COLORS} from '../../resources';
import {
  CustomCarousalComponent,
  ProductDetailComponent,
  SetQuantityButtonComponent,
} from '..';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {addItemToCart, removeItemFromCart} from '../../redux/slices/CartSlice';

type Props = {
  width: number;
  product: Product;
};

export const LargeProductCardComponent = ({product, width}: Props) => {
  const [productDetailModal, setProductDetailModal] = useState(false);
  const openProductDetail = () => {
    setProductDetailModal(true);
  };

  const cartItems = useAppSelector(state => state.Cart.cartItems);
  const dispatch = useAppDispatch();

  const findItemInCart = () => {
    if (cartItems.length > 0) {
      const index = cartItems.findIndex(item => {
        return item.productId === product.id;
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
    <>
      <View style={[styles.container, {width: width}]}>
        <View>
          {product.discountAvailable && (
            <View style={styles.discount}>
              <Text
                style={{
                  color: COLORS.WHITE,
                  fontSize: respFontSize(8),
                  fontWeight: '700',
                }}>
                {product.discountOff}
              </Text>
              <Text
                style={{
                  color: COLORS.WHITE,
                  fontSize: respFontSize(8),
                  fontWeight: '700',
                }}>
                OFF
              </Text>
            </View>
          )}
          <View style={styles.imageContainer}>
            <CustomCarousalComponent
              photos={product.photos}
              width={width}
              height={responsiveHeight(200)}
              onPressEvent={openProductDetail}
            />
            {/* <Image
            source={product.photos[0]}
            alt={product.name}
            style={styles.image}
            resizeMode="contain"
          /> */}
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.timerContainer}>
            <Icon name="timer-outline" size={11} color={COLORS.BLACK} />
            <Text style={styles.timerText}>{product.deliveryTime}</Text>
          </View>
          <Text style={styles.name} numberOfLines={2}>
            {product.name}
          </Text>
          <Text style={styles.weight}>{product.units}</Text>
          <View style={styles.priceContainer}>
            <View>
              {product.discountPrize ? (
                <>
                  <Text style={styles.price}>₹{product.discountPrize}</Text>
                  <Text style={styles.oldPrice}>₹{product.actualPrize}</Text>
                </>
              ) : (
                <Text style={styles.price}>₹{product.actualPrize}</Text>
              )}
            </View>
            {findItemInCart() !== -1 ? (
              <View
                style={{
                  alignItems: 'center',
                  height: responsiveHeight(28),
                  width: responsiveWidth(56),
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
                onPress={() => handleAddToCart()}
                style={styles.addButton}>
                <Text style={styles.addButtonText}>ADD</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      <Modal
        animationType="slide"
        statusBarTranslucent={true}
        transparent={true}
        visible={productDetailModal}
        onRequestClose={() => {
          setProductDetailModal(!productDetailModal);
        }}>
        <ProductDetailComponent
          setProductDetailModal={setProductDetailModal}
          product={product}
        />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: responsiveHeight(8),
    marginHorizontal: responsiveWidth(4),
    backgroundColor: COLORS.WHITE,
  },
  imageContainer: {
    // borderWidth: 1,
    // borderColor: COLORS.SILVER,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: responsiveHeight(200),
  },
  infoContainer: {
    flex: 1,
    width: '100%',
    padding: responsiveWidth(8),
    marginTop: responsiveHeight(4),
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.SILVER,
    width: responsiveWidth(64),
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(2),
    borderRadius: 6,
  },
  timerText: {
    fontSize: respFontSize(8),
    fontWeight: '600',
    marginLeft: responsiveWidth(4),
    color: COLORS.BLACK,
  },
  name: {
    fontSize: respFontSize(11),
    fontWeight: '600',
    color: COLORS.BLACK,
    marginVertical: responsiveHeight(4),
  },
  weight: {
    fontSize: respFontSize(10),
    color: COLORS.DARK_GREY,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: responsiveHeight(6),
  },
  price: {
    fontSize: respFontSize(10),
    color: COLORS.BLACK,
    fontWeight: '500',
  },
  oldPrice: {
    fontSize: respFontSize(10),
    textDecorationLine: 'line-through',
    color: COLORS.GREY,
  },
  addButton: {
    borderWidth: 1,
    borderColor: COLORS.GREEN,
    borderRadius: 8,
    paddingVertical: responsiveHeight(4),
    paddingHorizontal: responsiveWidth(16),
  },
  addButtonText: {
    fontSize: respFontSize(10),
    fontWeight: '800',
    color: COLORS.GREEN,
  },
  discount: {
    backgroundColor: COLORS.BLUE,
    padding: responsiveWidth(2),
    position: 'absolute',
    left: 10,
    zIndex: 20,
  },
});
