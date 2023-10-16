import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CaffeeScreen from '../screens/CaffeeScreens/CaffeeScreen';

const CaffeeStack = createNativeStackNavigator();
const CaffeeNav = () => {
  return (
    <CaffeeStack.Navigator>
      <CaffeeStack.Screen
        name="Caffee"
        component={CaffeeScreen}
        options={{headerShown: false}}
      />
    </CaffeeStack.Navigator>
  );
};

export default CaffeeNav;
