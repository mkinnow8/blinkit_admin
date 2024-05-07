import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTE} from '../resources';
import {
  CategoriesScreen,
  CheckoutScreen,
  HomeScreen,
  LoginScreen,
  OrderDetailScreen,
  OrdersScreen,
  ProfileScreen,
  SearchScreen,
  SigninScreen,
  SubCategoriesScreen,
} from '../screens';
import React, {useState} from 'react';
import {useAppSelector} from '../redux/hooks';

type Props = {};

const RootNavigator = (props: Props) => {
  const isLoggedIn = useAppSelector(state => state.User.isLoggedIn);
  return (
    <NavigationContainer>
      {!isLoggedIn ? <AuthStackNavigator /> : <MainStackNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;

const AuthStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

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
    </AuthStack.Navigator>
  );
};
