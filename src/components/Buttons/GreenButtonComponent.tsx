import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {COLORS} from '../../resources';

type Props = {
  buttonText: string;
  onPress?: () => void;
};

export const GreenButtonComponent = ({buttonText, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.btnText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: responsiveWidth(380),
    height: responsiveHeight(48),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: COLORS.GREEN,
    paddingVertical: responsiveHeight(4),
    paddingHorizontal: responsiveWidth(8),
    marginBottom: responsiveHeight(12),
  },
  btnText: {
    color: COLORS.WHITE,
    textAlign: 'center',
    fontSize: respFontSize(14),
    fontWeight: 'bold',
  },
});
