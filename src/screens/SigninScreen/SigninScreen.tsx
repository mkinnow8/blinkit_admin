import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {GoogleLogin} from '../../services/GoogleAuthentication';
import {googleLogo} from '../../assets';
import {Image} from 'react-native';
import {responsiveHeight} from '../../utilities/responsiveFunctions';
import {COLORS} from '../../resources';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useAppDispatch} from '../../redux/hooks';
import {userLoggedIn} from '../../redux/slices/UserSlice';

type Props = {};

export const SigninScreen = (props: Props) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const response = await GoogleLogin();
      const {idToken, user} = response;
      console.log('idToken: ' + idToken);
      console.log('user: ' + user.email);
      dispatch(userLoggedIn({token: idToken, userInfo: user}));
    } catch (apiError) {
      console.log('apiError: ' + apiError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <TouchableOpacity style={styles.rowContainer} onPress={handleGoogleLogin}>
        <Image source={googleLogo} style={styles.logo} />
        <Text style={styles.loginButtonText}>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: COLORS.BLUE,
    padding: responsiveHeight(6),
    borderRadius: responsiveHeight(8),
  },
  logo: {
    height: responsiveHeight(48),
    width: responsiveHeight(48),
  },
  loginButton: {},
  loginButtonText: {
    color: COLORS.WHITE,
    fontWeight: '500',
  },
});
