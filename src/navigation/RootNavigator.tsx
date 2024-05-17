import {View, Text, TouchableOpacity, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, ROUTE} from '../resources';
import {
  CategoriesScreen,
  CategoryScreen,
  CheckoutScreen,
  Dashboard,
  HomeScreen,
  LoginScreen,
  OrderDetailScreen,
  OrdersScreen,
  ProductScreen,
  ProfileScreen,
  RegisterScreen,
  SearchScreen,
  SigninScreen,
  SubCategoriesScreen,
  SubCategoryScreen,
} from '../screens';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {userLogoutRequested} from '../redux/slices/UserSlice';
import {responsiveWidth} from '../utilities/responsiveFunctions';
import {NativeModules} from 'react-native';
import {setEnglish, setHindi, setPunjabi} from '../redux/slices/LocaleSlice';

type Props = {};

const RootNavigator = (props: Props) => {
  const {isLoggedIn, role} = useAppSelector(state => state.User);
  const dispatch = useAppDispatch();
  useEffect(() => {
    let locale;
    if (Platform.OS === 'android') {
      locale = NativeModules.I18nManager.localeIdentifier;

      // if (locale.includes('en')) {
      //   locale = 'en';
      // } else if (locale.includes('hi')) {
      //   locale = 'hi';
      // }
    } else if (Platform.OS === 'ios') {
      locale =
        NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0];
    }
    if (locale.slice(0, 5) === 'en_US') {
      dispatch(setEnglish(null));
    } else if (locale.slice(0, 5) === 'pa_IN') {
      dispatch(setPunjabi(null));
    } else if (locale.slice(0, 5) === 'hi_IN') {
      dispatch(setHindi(null));
    }
    console.log('Locale ', locale);
  }, []);
  return (
    <NavigationContainer>
      {/* <AdminDrawerNavigator /> */}
      {!isLoggedIn ? (
        <AuthStackNavigator />
      ) : role === 'ADMIN' ? (
        <AdminDrawerNavigator />
      ) : (
        <MainStackNavigator />
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;

const AuthStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
const AdminDrawer = createDrawerNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name={ROUTE.HOME} component={HomeScreen} />
      <MainStack.Screen name={ROUTE.SEARCH} component={SearchScreen} />
      <MainStack.Screen name={ROUTE.PROFILE} component={ProfileScreen} />
      <MainStack.Screen name={ROUTE.CATEGORIES} component={CategoriesScreen} />
      <MainStack.Screen
        name={ROUTE.SUB_CATEGORIES}
        component={SubCategoriesScreen}
      />
      <MainStack.Screen name={ROUTE.CHECKOUT} component={CheckoutScreen} />
      <MainStack.Screen name={ROUTE.ORDERS} component={OrdersScreen} />
      <MainStack.Screen
        name={ROUTE.ORDER_DETAIL}
        component={OrderDetailScreen}
      />
    </MainStack.Navigator>
  );
};

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      {/* <AuthStack.Screen name={ROUTE.SIGN_IN} component={SigninScreen} /> */}
      <AuthStack.Screen name={ROUTE.LOGIN} component={LoginScreen} />
      <AuthStack.Screen name={ROUTE.REGISTER} component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

const AdminDrawerNavigator = () => {
  const dispatch = useAppDispatch();
  const locale = useAppSelector(state => state.Locale.locale);
  return (
    <AdminDrawer.Navigator
      screenOptions={{
        headerTitle: '',
        headerRight: () => (
          <TouchableOpacity
            onPress={() => dispatch(userLogoutRequested({}))}
            style={{marginRight: responsiveWidth(8)}}>
            <Icon name="power" color={COLORS.BLACK} size={24} />
          </TouchableOpacity>
        ),
        unmountOnBlur: true,
      }}>
      <AdminDrawer.Screen
        name={ROUTE.ADMIN_DASHBOARD}
        component={Dashboard}
        options={{drawerLabel: locale.dashboard}}
      />
      <AdminDrawer.Screen
        name={ROUTE.CATEGORY}
        component={CategoryScreen}
        options={{drawerLabel: locale.category}}
      />
      <AdminDrawer.Screen
        name={ROUTE.SUB_CATEGORY}
        component={SubCategoryScreen}
        options={{drawerLabel: locale.subcategory}}
      />
      <AdminDrawer.Screen
        name={ROUTE.PRODUCT}
        component={ProductScreen}
        options={{drawerLabel: locale.product}}
      />
    </AdminDrawer.Navigator>
  );
};
