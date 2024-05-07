import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
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
import {ProductDetailComponent, SetQuantityButtonComponent} from '..';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {addItemToCart, removeItemFromCart} from '../../redux/slices/CartSlice';

type Props = {
  product: Product;
};

const ProductCardComponent = ({product}: Props) => {
  const [productDetailModal, setProductDetailModal] = useState(false);
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

  const openProductDetail = () => {
    setProductDetailModal(true);
  };
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={openProductDetail}>
          <View style={styles.imageContainer}>
            <Image
              source={product.photos[0]}
              alt={product.name}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>
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

export default ProductCardComponent;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(125),
    marginBottom: responsiveHeight(12),
  },
  imageContainer: {
    padding: responsiveWidth(8),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.SILVER,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },
  infoContainer: {
    flex: 1,
    width: '100%',
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
});
