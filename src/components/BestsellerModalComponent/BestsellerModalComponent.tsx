import {
  Animated,
  FlatList,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useRef} from 'react';
import {COLORS} from '../../resources';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {LargeProductCardComponent} from '../LargeProductCardComponent/LargeProductCardComponent';
import {FooterComponent} from '../FooterComponent/FooterComponent';

type Props = {
  setBestSellerModal: React.Dispatch<React.SetStateAction<boolean>>;
  bestseller: Bestseller;
};

export const BestsellerModalComponent = ({
  setBestSellerModal,
  bestseller,
}: Props) => {
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
          setBestSellerModal(false);
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
          onPress={() => setBestSellerModal(false)}>
          <Icon name="close" size={24} color={COLORS.WHITE} />
        </TouchableOpacity>
        {/* List of Cards */}
        <FlatList
          style={{padding: responsiveWidth(12)}}
          data={bestseller.products}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <View style={styles.rowContainer}>
              <Text style={styles.headingText}>{bestseller.name} </Text>
              <Text style={{color: COLORS.GREEN, fontWeight: '600'}}>
                see all
              </Text>
            </View>
          )}
          renderItem={({item}) => (
            <LargeProductCardComponent
              product={item}
              width={responsiveWidth(195)}
            />
          )}
        />
        <FooterComponent closeModalOnNext={setBestSellerModal} />
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
    height: '90%',
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
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: responsiveHeight(12),
  },
  headingText: {
    fontSize: responsiveWidth(18),
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
});
