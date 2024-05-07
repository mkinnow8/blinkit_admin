import {
  Animated,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {COLORS, ROUTE} from '../../resources';
import {maggi} from '../../assets';
import {FooterProductInfoComponent} from './FooterProductInfoComponent';
import {useAppSelector} from '../../redux/hooks';
import {CartModalComponent} from './CartModalComponent';
import {useNavigation} from '@react-navigation/native';

type Props = {
  productDetailFooter?: boolean;
  product?: Product;
  activeProductOption?: number;
  isCartModalOpened?: boolean;
  setCartModal2?: React.Dispatch<React.SetStateAction<boolean>> | any;
  closeModalOnNext?: React.Dispatch<React.SetStateAction<boolean>> | any;
};

export const FooterComponent = ({
  productDetailFooter,
  product,
  activeProductOption,
  isCartModalOpened,
  setCartModal2,
  closeModalOnNext,
}: Props) => {
  const navigation = useNavigation();
  const {totalItems, totalPrice, cartItems} = useAppSelector(
    state => state.Cart,
  );
  const [cartModal, setCartModal] = useState(false);
  const openCartModal = () => {
    setCartModal(true);
  };
  const closeCartModal = () => {
    setCartModal2(false);
  };
  const progress = (totalPrice * 100) / 199;
  return (
    <>
      <View
        style={{
          height: responsiveHeight(56),
          backgroundColor: COLORS.LIGHT_BLUE_3,
          elevation: 2,
          borderTopColor: COLORS.WHITE,
          borderTopWidth: 1,
          flexDirection: 'row',
          paddingVertical: responsiveHeight(8),
          paddingHorizontal: responsiveWidth(8),
        }}>
        <View
          style={{
            backgroundColor: COLORS.WHITE,
            borderRadius: 6,
            height: responsiveWidth(32),
          }}>
          <Icon name="moped" size={respFontSize(24)} color={COLORS.BLUE} />
        </View>
        <View style={{marginLeft: responsiveWidth(8), flex: 1}}>
          <Text style={[styles.footerTextBlue, styles.footerText]}>
            Get FREE delivery
          </Text>
          {totalItems > 0 ? (
            totalPrice < 199 ? (
              <Text style={styles.footerText}>
                Add products worth ₹{199 - totalPrice} more
              </Text>
            ) : (
              <Text style={styles.footerText}>Yay! you got FREE Delivery</Text>
            )
          ) : (
            <Text style={styles.footerText}>
              on shopping products worth ₹199
            </Text>
          )}

          {totalItems > 0 ? (
            <View style={[styles.progressBarContainer]}>
              <Animated.View
                style={[
                  styles.progressBar,
                  {
                    width: `${progress}%`,
                  },
                ]}
              />
            </View>
          ) : null}
        </View>
      </View>
      {productDetailFooter ? (
        product?.optionsAvailable && product?.options ? (
          <FooterProductInfoComponent
            product={
              product?.options[activeProductOption ? activeProductOption : 0]
            }
          />
        ) : (
          <FooterProductInfoComponent product={product} />
        )
      ) : cartItems.length ? (
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
          <TouchableOpacity
            style={[styles.rowContainer, {flex: 1}]}
            onPress={isCartModalOpened ? closeCartModal : openCartModal}>
            <View
              style={{
                padding: responsiveWidth(2),
                borderWidth: 1,
                borderColor: COLORS.SILVER,
                borderRadius: 8,
              }}>
              <Image
                source={cartItems[cartItems.length - 1].productImage}
                style={{
                  height: responsiveHeight(32),
                  width: responsiveWidth(32),
                }}
              />
            </View>
            <Text style={styles.cartText}> {totalItems} Items</Text>
            <Icon
              name={isCartModalOpened ? 'menu-down' : 'menu-up'}
              size={respFontSize(20)}
              color={COLORS.GREEN}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              closeModalOnNext && closeModalOnNext(false);
              if (isCartModalOpened) {
                closeCartModal();
              }
              navigation.navigate(ROUTE.CHECKOUT as never);
            }}
            style={[
              styles.rowContainer,
              {
                justifyContent: 'center',
                height: responsiveHeight(40),
                width: responsiveWidth(168),
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
              Next
            </Text>
            <Icon
              name="menu-right"
              size={respFontSize(20)}
              color={COLORS.WHITE}
            />
          </TouchableOpacity>
        </View>
      ) : null}
      <Modal
        animationType="slide"
        statusBarTranslucent={true}
        transparent={true}
        visible={cartModal}
        onRequestClose={() => {
          setCartModal(!cartModal);
        }}>
        <CartModalComponent
          setCartModal={setCartModal}
          closeModalOnNext={closeModalOnNext ? closeModalOnNext : null}
        />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  footerTextBlue: {
    color: COLORS.BLUE,
    fontWeight: '600',
  },
  footerText: {
    fontSize: respFontSize(10),
  },
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
  progressBarContainer: {
    backgroundColor: COLORS.LIGHT_BLUE_4,
    height: responsiveHeight(2),
    width: '100%',
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
    borderRadius: 8,
    overflow: 'hidden',
  },
  progressBar: {
    borderRadius: 8,
    backgroundColor: COLORS.BLUE,
    height: responsiveHeight(2),
    width: '60%',
  },
});
