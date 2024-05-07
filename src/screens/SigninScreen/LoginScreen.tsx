import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../resources';
import {useNavigation} from '@react-navigation/native';
import {blinkitBackground, facebookLogo, googleLogo} from '../../assets';
import {TouchableOpacity} from 'react-native';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {GreenButtonComponent, LoginInputComponent} from '../../components';

type Props = {};

export const LoginScreen = (props: Props) => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
        keyboardVerticalOffset={0}>
        <Image source={blinkitBackground} style={styles.loginImage} />
        <View style={{paddingHorizontal: responsiveWidth(24)}}>
          <Text style={styles.loginHeading}>Login to Your Account</Text>
          <LoginInputComponent icon={'email'} placeholder="Enter email" />
          <LoginInputComponent
            icon={showPassword ? 'eye' : 'eye-off'}
            placeholder="Enter password"
            secureText={showPassword}
            onPress={togglePassword}
          />
          <View style={{marginVertical: 12}}>
            <GreenButtonComponent buttonText="Login" />
          </View>
          <View
            style={{
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Text style={{color: COLORS.BLACK}}> OR Login with </Text>
            <View style={styles.rowContainer}>
              <TouchableOpacity style={styles.loginCompaniesIconContainer}>
                <Image source={googleLogo} style={styles.loginCompaniesIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.loginCompaniesIconContainer}>
                <Image
                  source={facebookLogo}
                  style={styles.loginCompaniesIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.rowContainer}>
              <Text style={{color: COLORS.BLACK}}>Don't have an account? </Text>
              <TouchableOpacity
              // onPress={() => navigation.navigate(ROUTE.REGISTER as never)}
              >
                <Text
                  style={{
                    color: COLORS.GREEN,
                    textDecorationLine: 'underline',
                  }}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
    height: responsiveHeight(500),
    marginBottom: responsiveHeight(12),
  },
  loginHeading: {
    color: COLORS.BLACK,
    fontSize: respFontSize(20),
    textAlign: 'center',
    fontWeight: '600',
    marginVertical: responsiveHeight(12),
  },

  loginCompaniesIcon: {
    height: responsiveHeight(48),
    width: responsiveWidth(48),
  },
  loginCompaniesIconContainer: {
    height: responsiveHeight(48),
    width: responsiveWidth(48),
    marginHorizontal: responsiveWidth(8),
    marginVertical: responsiveHeight(12),
  },
  rowContainer: {
    flexDirection: 'row',
  },
});
