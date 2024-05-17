import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, ROUTE} from '../../resources';
import {useNavigation} from '@react-navigation/native';
import {blinkitBackground, facebookLogo, googleLogo} from '../../assets';
import {TouchableOpacity} from 'react-native';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {GreenButtonComponent, LoginInputComponent} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {LoginBackground} from './LoginBackground';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {userLoginRequested} from '../../redux/slices/UserSlice';
import {
  validateEmail,
  validatePassword,
} from '../../utilities/inputValidations';

type Props = {};

export const LoginScreen = (props: Props) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const {isLoading} = useAppSelector(state => state.User);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = () => {
    if (validateEmail(email) && validatePassword(password))
      dispatch(userLoginRequested({email, password}));
    else {
      ToastAndroid.show('Invalid Inputs!', ToastAndroid.SHORT);
    }
  };
  return (
    <LoginBackground>
      <View style={{paddingHorizontal: responsiveWidth(24)}}>
        <Text style={styles.loginHeading}>Login to Your Account</Text>
        <LoginInputComponent
          icon={'email'}
          placeholder="Enter email"
          value={email}
          setValue={setEmail}
        />
        <LoginInputComponent
          icon={showPassword ? 'eye' : 'eye-off'}
          placeholder="Enter password"
          secureText={showPassword}
          onPress={togglePassword}
          value={password}
          setValue={setPassword}
        />
        <View style={{marginVertical: 12}}>
          {isLoading ? (
            <GreenButtonComponent isLoading={true} />
          ) : (
            <GreenButtonComponent buttonText="Login" onPress={handleLogin} />
          )}
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
              <Image source={facebookLogo} style={styles.loginCompaniesIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <Text style={{color: COLORS.BLACK}}>Don't have an account? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTE.REGISTER as never)}>
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
