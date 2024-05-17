import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {COLORS, ROUTE} from '../../resources';
import {CustomHeaderComponent} from '../../components';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {userLoggedOut, userLogoutRequested} from '../../redux/slices/UserSlice';
import {handleGoogleLogout} from '../../services/GoogleAuthentication';
import {useNavigation} from '@react-navigation/native';

type Props = {};

export const ProfileScreen = (props: Props) => {
  const userInfo = useAppSelector(state => state.User.userInfo);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const handleLogout = async () => {
    // await handleGoogleLogout();
    // dispatch(userLoggedOut({}));
    dispatch(userLogoutRequested({}));
  };
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <CustomHeaderComponent title={'Profile'} />
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View>
            <Text style={styles.nameText}>{userInfo?.name}</Text>
            <Text style={styles.phoneText}>{userInfo?.email}</Text>
          </View>
        </View>
        {/* Your Information */}
        <Text style={styles.optionHeader}>{'your information'}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTE.ORDERS as never)}
          style={[styles.rowContainer, {marginVertical: responsiveHeight(8)}]}>
          <View style={styles.iconContainer}>
            <Icon name={'cart-outline'} style={styles.icon} />
          </View>
          <Text style={styles.title}>{'Your orders'}</Text>
          <Icon name="chevron-right" style={styles.chevron} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.rowContainer, {marginVertical: responsiveHeight(8)}]}>
          <View style={styles.iconContainer}>
            <Icon name={'book-account-outline'} style={styles.icon} />
          </View>
          <Text style={styles.title}>{'Address book'}</Text>
          <Icon name="chevron-right" style={styles.chevron} />
        </TouchableOpacity>
        {/* Other Information */}
        <Text style={styles.optionHeader}>{'other information'}</Text>
        <TouchableOpacity
          style={[styles.rowContainer, {marginVertical: responsiveHeight(8)}]}
          onPress={handleLogout}>
          <View style={styles.iconContainer}>
            <Icon name={'power'} style={styles.icon} />
          </View>
          <Text style={styles.title}>{'Logout'}</Text>
          <Icon name="chevron-right" style={styles.chevron} />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: responsiveHeight(8),
    paddingHorizontal: responsiveWidth(12),
    backgroundColor: COLORS.WHITE,
  },
  subContainer: {
    backgroundColor: 'white',
    paddingVertical: responsiveHeight(8),
    marginBottom: 8,
  },
  nameText: {
    fontSize: respFontSize(16),
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
  phoneText: {
    color: COLORS.DARK_GREY,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: COLORS.SILVER,
    borderRadius: 999, // Large value to ensure rounded shape
    padding: responsiveWidth(4),
  },
  icon: {
    fontSize: respFontSize(16),
    color: COLORS.GREY,
  },
  title: {
    color: COLORS.BLACK,
    fontWeight: '500',
    marginLeft: responsiveWidth(12),
    flex: 1,
  },
  chevron: {
    fontSize: respFontSize(24),
    color: COLORS.GREY,
  },
  optionHeader: {
    color: COLORS.GREY,
    fontWeight: '500',
    fontSize: respFontSize(10),
    textTransform: 'uppercase',
    marginVertical: responsiveHeight(10),
  },
});
