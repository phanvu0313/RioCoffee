import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreens/ProfileScreen';

const ProfileStack = createNativeStackNavigator();
const ProfileNav = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileNav;
