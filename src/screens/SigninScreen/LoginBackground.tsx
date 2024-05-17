import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Image} from 'react-native';
import {blinkitBackground} from '../../assets';
import {COLORS} from '../../resources';
import {responsiveHeight} from '../../utilities/responsiveFunctions';

type Props = {
  children: React.ReactNode;
};

export const LoginBackground = ({children}: Props) => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
        keyboardVerticalOffset={0}>
        <Image source={blinkitBackground} style={styles.loginImage} />
        {children}
        <LinearGradient
          start={{x: 0, y: 0.9}}
          end={{x: 0, y: 1}}
          colors={['transparent', COLORS.WHITE]}
          style={styles.imageGradient}></LinearGradient>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  loginImage: {
    width: '100%',
    height: responsiveHeight(450),
    marginBottom: responsiveHeight(12),
  },
  imageGradient: {
    width: '100%',
    height: responsiveHeight(450),
    position: 'absolute',
    zIndex: 10,
    top: 0,
  },
});
