import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import React from 'react';
import {COLORS} from '../../resources';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';

type Props = {
  icon: string;
  placeholder: string;
  onPress?: () => void;
  secureText?: boolean;
};

export const LoginInputComponent = ({
  icon,
  placeholder,
  onPress,
  secureText,
}: Props) => {
  return (
    <View style={[styles.rowContainer, styles.inputContainer]}>
      <TextInput
        style={styles.loginInput}
        placeholder={placeholder}
        placeholderTextColor={COLORS.LIGHT_GREY}
        secureTextEntry={secureText}
      />
      <Pressable
        style={{paddingHorizontal: responsiveWidth(6)}}
        onPress={onPress}>
        <Icon name={icon} size={18} color={COLORS.BLACK} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: COLORS.GREY,
    borderRadius: 5,
    marginVertical: responsiveHeight(4),
  },
  loginInput: {
    color: COLORS.BLACK,
    flex: 1,
    height: responsiveHeight(48),
    padding: responsiveWidth(10),
  },
});
