import {PanResponder, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import {Animated} from 'react-native';
import {COLORS} from '../../resources';
import {responsiveWidth} from '../../utilities/responsiveFunctions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';

type Props = {
  children: React.ReactNode;
  onClose: () => void;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CommonModalContainer = ({children, setModal, onClose}: Props) => {
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
          onClose();
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
      <TouchableOpacity style={styles.modalCloseIcon} onPress={onClose}>
        <Icon name="close" size={24} color={COLORS.WHITE} />
      </TouchableOpacity>
      <Animated.View
        style={[styles.subContainer, {transform: [{translateY: pan.y}]}]}
        {...panResponder.panHandlers}>
        {children}
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
    overflow: 'hidden',
  },
  modalCloseIcon: {
    position: 'absolute',
    top: 40,
    zIndex: 20,
    alignSelf: 'center',
    backgroundColor: COLORS.BLACK,
    borderRadius: 20,
    padding: responsiveWidth(4),
  },
});
