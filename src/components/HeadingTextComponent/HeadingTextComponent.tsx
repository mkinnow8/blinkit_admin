import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../resources';
import {
  respFontSize,
  responsiveHeight,
} from '../../utilities/responsiveFunctions';

type Props = {
  text: string;
};

export const HeadingTextComponent = ({text}: Props) => {
  return <Text style={styles.heading}>{text}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    color: COLORS.BLACK,
    fontSize: respFontSize(20),
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: responsiveHeight(32),
    marginTop: responsiveHeight(16),
  },
});
