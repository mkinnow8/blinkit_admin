import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS} from '../../resources';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {useAppSelector} from '../../redux/hooks';

type Props = {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  button1: string;
  button2: string;
};

export const OptionsButtonComponent = ({
  page,
  setPage,
  button1,
  button2,
}: Props) => {
  const locale = useAppSelector(state => state.Locale.locale);
  return (
    <View style={styles.optionButtonContainer}>
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => setPage(button1)}>
        <Text
          style={[
            styles.optionButtonText,
            page === button1 && {
              backgroundColor: COLORS.GREEN,
              color: COLORS.WHITE,
            },
          ]}>
          {button1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => setPage(button2)}>
        <Text
          style={[
            styles.optionButtonText,
            page === button2 && {
              backgroundColor: COLORS.GREEN,
              color: COLORS.WHITE,
            },
          ]}>
          {button2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  optionButtonContainer: {
    marginVertical: responsiveHeight(12),
    marginHorizontal: responsiveWidth(12),
    flexDirection: 'row',
    height: responsiveHeight(48),
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    borderColor: COLORS.GREEN,
    borderRadius: 5,
    overflow: 'hidden',
  },
  optionButton: {
    width: responsiveWidth(202),

    borderRadius: 2,
    overflow: 'hidden',
  },
  optionButtonText: {
    color: COLORS.BLACK,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '500',
    width: '100%',
    height: '100%',
    fontSize: 16,
  },
});
