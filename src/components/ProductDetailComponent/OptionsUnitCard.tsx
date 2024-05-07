import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {COLORS} from '../../resources';

type Props = {
  option: ProductOption;
  index: number;
  setActiveOption: React.Dispatch<React.SetStateAction<number>>;
  activeOption: number;
};

export const OptionsUnitCard = ({
  option,
  index,
  setActiveOption,
  activeOption,
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.cardContainer,
        {
          borderColor:
            activeOption === index ? COLORS.GREEN : COLORS.WHITE_GREY,
          backgroundColor:
            activeOption === index ? COLORS.GREEN_TRANSPARENT : COLORS.WHITE,
        },
      ]}
      onPress={() => setActiveOption(index)}>
      {option.discountAvailable && (
        <View
          style={{
            position: 'absolute',
            top: -5,
            backgroundColor: COLORS.BLUE,
            paddingHorizontal: responsiveWidth(4),
            paddingVertical: responsiveHeight(1),
            borderRadius: 4,
          }}>
          <Text
            style={{
              color: COLORS.WHITE,
              fontSize: respFontSize(8),
              fontWeight: '500',
            }}>
            {option.discountOff} OFF
          </Text>
        </View>
      )}

      <Text style={styles.text}>{option.units}</Text>
      {option.discountAvailable ? (
        <View style={styles.rowContainer}>
          <Text style={[styles.text, styles.boldText]}>
            ₹{option.discountPrize}
          </Text>
          <Text style={styles.lightText}>₹{option.actualPrize}</Text>
        </View>
      ) : (
        <Text style={[styles.text, styles.boldText]}>
          ₹{option.actualPrize}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: responsiveHeight(64),
    width: responsiveWidth(84),
    paddingVertical: responsiveHeight(16),
    marginRight: responsiveWidth(8),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: COLORS.WHITE_GREY,
    borderWidth: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lightText: {
    fontSize: responsiveWidth(12),
    color: COLORS.DARK_GREY,
    textDecorationLine: 'line-through',
    marginLeft: responsiveWidth(4),
  },
  text: {
    fontSize: responsiveWidth(12),
    color: COLORS.BLACK,
  },
  boldText: {
    fontWeight: '600',
  },
});
