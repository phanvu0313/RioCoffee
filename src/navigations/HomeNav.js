import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RewardScreen from '../screens/RewardScreen/RewardScreen';

const HomeStack = createNativeStackNavigator();
const HomeNav = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="RewardScreen"
        component={RewardScreen}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNav;
