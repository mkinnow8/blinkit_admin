import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  PanResponder,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {COLORS} from '../../resources';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomCarousalComponent, FooterComponent} from '..';
import {OptionsUnitCard} from './OptionsUnitCard';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';

type Props = {
  setProductDetailModal: React.Dispatch<React.SetStateAction<boolean>>;
  product: Product;
};

export const ProductDetailComponent = ({
  setProductDetailModal,
  product,
}: Props) => {
  const [activeOption, setActiveOption] = useState<number>(0);
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
          setProductDetailModal(false);
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
      <TouchableOpacity
        style={styles.modalCloseIcon}
        onPress={() => setProductDetailModal(false)}>
        <Icon name="close" size={24} color={COLORS.WHITE} />
      </TouchableOpacity>
      <Animated.View
        style={[styles.subContainer, {transform: [{translateY: pan.y}]}]}
        {...panResponder.panHandlers}>
        {/* Product Image Carousal */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <CustomCarousalComponent
              photos={product.photos}
              width={Dimensions.get('window').width}
              height={responsiveHeight(400)}
            />
          </View>
          {/* Product Detail */}
          <View style={{paddingHorizontal: responsiveWidth(12)}}>
            <View style={styles.rowContainer}>
              <View style={{flex: 1}}>
                <Text style={styles.headingText}>{product.name}</Text>
                <View style={styles.timerContainer}>
                  <Icon name="timer-outline" size={11} color={COLORS.BLACK} />
                  <Text style={styles.timerText}>{product.deliveryTime}</Text>
                </View>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: COLORS.WHITE_GREY,
                  borderRadius: 50,
                  padding: responsiveWidth(2),
                }}>
                <Icon name="share-outline" size={18} color={COLORS.BLACK} />
              </View>
            </View>
            <View
              style={[
                styles.rowContainer,
                {
                  marginVertical: responsiveHeight(8),
                  paddingVertical: responsiveHeight(4),
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  borderColor: COLORS.SILVER,
                },
              ]}>
              <Image
                source={product.photos[0]}
                style={{
                  width: responsiveWidth(28),
                  height: responsiveHeight(28),
                  borderRadius: 4,
                }}
              />
              <View style={{flex: 1, marginLeft: responsiveWidth(8)}}>
                <Text style={styles.smallText}>{product.companyName}</Text>
                <Text style={[styles.smallText, {color: COLORS.GREEN}]}>
                  Explore all products
                </Text>
              </View>
              <Icon name="arrow-right" size={16} color={COLORS.BLACK} />
            </View>
            {product.optionsAvailable ? (
              <View
                style={{
                  marginVertical: responsiveHeight(8),
                  flexDirection: 'row',
                }}>
                {product?.options?.map((option, index) => {
                  return (
                    <OptionsUnitCard
                      key={index}
                      index={index}
                      option={option}
                      setActiveOption={setActiveOption}
                      activeOption={activeOption}
                    />
                  );
                })}
              </View>
            ) : (
              <View
                style={{
                  height: responsiveHeight(64),
                  paddingVertical: responsiveHeight(8),
                  borderBottomWidth: 1,
                  borderColor: COLORS.SILVER,
                  justifyContent: 'space-between',
                }}>
                <Text>{product.units}</Text>
                {product.discountAvailable ? (
                  <View style={styles.rowContainer}>
                    <Text style={styles.boldText}>
                      ₹{product.discountPrize}
                    </Text>
                    <Text
                      style={{
                        marginLeft: 6,
                        textDecorationLine: 'line-through',
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
                  <Text style={styles.boldText}>₹{product.actualPrize}</Text>
                )}
              </View>
            )}

            <View style={{marginVertical: responsiveHeight(8)}}>
              <Text style={styles.boldText}>Product Details</Text>
              <Text style={[styles.smallText, {fontWeight: '500'}]}>
                Description
              </Text>
              <Text style={styles.smallText}>{product.productDetail}</Text>
            </View>
          </View>
        </ScrollView>
        <FooterComponent
          productDetailFooter={true}
          product={product}
          activeProductOption={activeOption}
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
  subContainer: {
    position: 'absolute',
    bottom: 0,
    height: '85%',
    width: '100%',
    backgroundColor: COLORS.WHITE,
    overflow: 'hidden',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  modalCloseIcon: {
    position: 'absolute',
    top: responsiveHeight(90),
    zIndex: 30,
    alignSelf: 'center',
    backgroundColor: COLORS.BLACK,
    borderRadius: 20,
    padding: responsiveWidth(4),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingText: {
    fontSize: responsiveWidth(18),
    marginVertical: responsiveHeight(8),
    fontWeight: 'bold',
    color: COLORS.BLACK,
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
  boldText: {
    fontSize: respFontSize(12),
    fontWeight: '600',
    color: COLORS.BLACK,
  },
  smallText: {
    fontSize: respFontSize(10),
    color: COLORS.BLACK,
  },
});
