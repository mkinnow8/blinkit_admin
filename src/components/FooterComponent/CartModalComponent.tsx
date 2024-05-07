import {
  Animated,
  FlatList,
  PanResponder,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useRef} from 'react';
import {COLORS} from '../../resources';
import {TouchableOpacity} from 'react-native';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {CartItemComponent} from './CartItemComponent';
import {useAppSelector} from '../../redux/hooks';
import {FooterComponent} from './FooterComponent';

type Props = {
  setCartModal: React.Dispatch<React.SetStateAction<boolean>>;
  closeModalOnNext?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CartModalComponent = ({setCartModal, closeModalOnNext}: Props) => {
  const {cartItems, totalItems} = useAppSelector(state => state.Cart);
  if (cartItems.length === 0) {
    setCartModal(false);
  }
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dy: +pan.y > 1 ? pan.y : new Animated.Value(0),
          },
        ],
        {useNativeDriver: false},
      ),
      onPanResponderRelease: (e, gesture) => {
        console.log('Released', gesture);
        if (gesture.dy > 100) {
          console.log('Swiped down!');
          //   closeModal();
          setCartModal(false);
          resetPosition();
        } else {
          resetPosition();
        }
      },
    }),
  ).current;
  const resetPosition = () => {
    Animated.spring(pan, {
      toValue: {x: 0, y: 0},
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.subContainer, {transform: [{translateY: pan.y}]}]}
        {...panResponder.panHandlers}>
        <TouchableOpacity
          style={styles.modalCloseIcon}
          onPress={() => setCartModal(false)}>
          <Icon name="close" size={24} color={COLORS.WHITE} />
        </TouchableOpacity>

        <FlatList
          style={styles.listContainer}
          data={cartItems}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <View
              style={[
                styles.rowContainer,
                {
                  borderBottomWidth: 1,
                  borderBottomColor: COLORS.SILVER,
                  paddingVertical: 8,
                },
              ]}>
              <Icon name="timer-outline" size={24} color={COLORS.BLACK} />
              <View style={{marginLeft: responsiveWidth(12)}}>
                <Text style={styles.headingText}>Delivery in 10 Minutes</Text>
                <Text>Shipment of {totalItems} items</Text>
              </View>
            </View>
          )}
          renderItem={({item}) => <CartItemComponent cartItem={item} />}
        />
        <FooterComponent
          isCartModalOpened={true}
          setCartModal2={setCartModal}
          closeModalOnNext={closeModalOnNext ? closeModalOnNext : null}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DARK_TRANSPARENT,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subContainer: {
    position: 'absolute',
    bottom: 0,
    maxHeight: responsiveHeight(800),
    width: '100%',
    backgroundColor: COLORS.LIGHT_BLUE_3,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  modalCloseIcon: {
    position: 'absolute',
    top: -50,
    alignSelf: 'center',
    backgroundColor: COLORS.BLACK,
    borderRadius: 20,
    padding: responsiveWidth(4),
  },
  listContainer: {
    backgroundColor: COLORS.WHITE,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginTop: responsiveHeight(12),
    marginHorizontal: responsiveWidth(12),
    padding: responsiveWidth(12),
  },
  headingText: {
    color: COLORS.BLACK,
    fontSize: respFontSize(14),
    fontWeight: '600',
    marginBottom: responsiveWidth(2),
  },
});
