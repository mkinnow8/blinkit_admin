import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {COLORS} from '../../resources';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';

type Props = {
  icon?: string;
  placeholder: string;
  onPress?: () => void;
  secureText?: boolean;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  isMultiline?: boolean;
  numberOfLines?: number;
  inputType?: string;
  label?: string;
};

export const LoginInputComponent = ({
  icon,
  placeholder,
  onPress,
  secureText,
  isMultiline,
  numberOfLines,
  value,
  setValue,
  inputType = 'text',
  label,
}: Props) => {
  return (
    <>
      {label && <Text style={styles.label}> {label}</Text>}
      <View style={[styles.rowContainer, styles.inputContainer]}>
        <TextInput
          style={[
            styles.loginInput,
            {
              height: isMultiline
                ? responsiveHeight(48 * 1.5)
                : responsiveHeight(48),
            },
          ]}
          inputMode={inputType}
          placeholder={placeholder}
          placeholderTextColor={COLORS.LIGHT_GREY}
          secureTextEntry={secureText}
          onChangeText={setValue}
          value={value}
          multiline={isMultiline}
          numberOfLines={numberOfLines ? numberOfLines : 1}
        />
        <Pressable
          style={{paddingHorizontal: responsiveWidth(6)}}
          onPress={onPress}>
          <Icon name={icon ? icon : ''} size={18} color={COLORS.BLACK} />
        </Pressable>
      </View>
    </>
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
    borderRadius: 8,
    marginVertical: responsiveHeight(4),
  },
  loginInput: {
    color: COLORS.BLACK,
    flex: 1,
    height: responsiveHeight(48),
    padding: responsiveWidth(10),
  },
  label: {
    fontWeight: '700',
    color: COLORS.BLACK,
    marginTop: responsiveHeight(4),
  },
});
