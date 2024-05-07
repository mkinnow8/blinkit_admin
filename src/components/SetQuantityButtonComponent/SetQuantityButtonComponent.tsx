import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {COLORS} from '../../resources';

type Props = {
  text: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export const SetQuantityButtonComponent = ({
  text,
  onDecrement,
  onIncrement,
}: Props) => {
  return (
    <View style={[styles.rowContainer, styles.buttonContainer]}>
      <TouchableOpacity onPress={onDecrement}>
        <Icon name="minus" size={respFontSize(12)} color={COLORS.WHITE} />
      </TouchableOpacity>
      <Text style={styles.buttonText}>{text}</Text>
      <TouchableOpacity onPress={onIncrement}>
        <Icon name="plus" size={respFontSize(12)} color={COLORS.WHITE} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    // height: responsiveHeight(28),
    // width: responsiveWidth(56),
    height: '100%',
    width: '100%',
    justifyContent: 'space-evenly',
    borderRadius: 8,
    backgroundColor: COLORS.GREEN,
    // paddingVertical: responsiveHeight(4),
    // paddingHorizontal: responsiveWidth(8),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: respFontSize(11),
    fontWeight: '600',
    textAlign: 'center',
  },
});
