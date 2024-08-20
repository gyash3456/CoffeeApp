import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{tabBarHideOnKeyboard: true, headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
      <Tab.Screen name="Cart" component={CartScreen}></Tab.Screen>

      <Tab.Screen name="Favorite" component={FavoriteScreen}></Tab.Screen>
      <Tab.Screen name="History" component={OrderHistoryScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
