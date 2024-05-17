import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, ROUTE} from '../../resources';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {
  blinkitBackground,
  blinkitLogo,
  facebookLogo,
  googleLogo,
} from '../../assets';
import {GreenButtonComponent, LoginInputComponent} from '../../components';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {LoginBackground} from './LoginBackground';
import {
  validateEmail,
  validatePassword,
} from '../../utilities/inputValidations';
import {registerAPI} from '../../services/commonApis';

type Props = {};

export const RegisterScreen = (props: Props) => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(true);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleRegister = async () => {
    setIsLoading(true);
    if (
      validateEmail(email) &&
      validatePassword(password) &&
      password === confirmPassword &&
      name.length > 2
    ) {
      const payload = {
        fullname: name,
        email: email,
        password: password,
      };
      const response = await registerAPI(payload);
      if (response.status == 200) {
        navigation.navigate(ROUTE.LOGIN as never);
      } else {
        ToastAndroid.show('Registration Failed!', ToastAndroid.SHORT);
      }
    } else {
      ToastAndroid.show('Invalid Inputs!', ToastAndroid.SHORT);
    }
    setIsLoading(false);
  };
  return (
    <LoginBackground>
      <View style={{paddingHorizontal: responsiveWidth(24)}}>
        <Text style={styles.loginHeading}>Register New Account</Text>
        <LoginInputComponent
          icon={'account'}
          placeholder="full name"
          value={name}
          setValue={setName}
        />
        <LoginInputComponent
          icon={'email'}
          placeholder="email"
          value={email}
          setValue={setEmail}
        />
        <LoginInputComponent
          icon={showPassword ? 'eye' : 'eye-off'}
          placeholder="password"
          secureText={showPassword}
          onPress={togglePassword}
          value={password}
          setValue={setPassword}
        />
        <LoginInputComponent
          icon={showConfirmPassword ? 'eye' : 'eye-off'}
          placeholder="confirm password"
          secureText={showConfirmPassword}
          onPress={toggleConfirmPassword}
          value={confirmPassword}
          setValue={setConfirmPassword}
        />

        <View style={{marginVertical: 12}}>
          {isLoading ? (
            <GreenButtonComponent isLoading={true} />
          ) : (
            <GreenButtonComponent
              buttonText="Register"
              onPress={handleRegister}
            />
          )}
        </View>
        <View
          style={{
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <View style={styles.rowContainer}>
            <Text style={{color: COLORS.BLACK}}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text
                style={{
                  color: COLORS.GREEN,
                  textDecorationLine: 'underline',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LoginBackground>
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
  loginHeading: {
    color: COLORS.BLACK,
    fontSize: respFontSize(20),
    textAlign: 'center',
    fontWeight: '600',
    marginVertical: responsiveHeight(12),
    marginTop: responsiveHeight(16),
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
  imageGradient: {
    width: '100%',
    height: responsiveHeight(450),
    position: 'absolute',
    zIndex: 10,
    top: 0,
  },
});
