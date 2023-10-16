import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TagsScreen from '../screens/TagsScreens/TagsScreen';

const TagsStack = createNativeStackNavigator();
const TagsNav = () => {
  return (
    <TagsStack.Navigator>
      <TagsStack.Screen
        name="Tags"
        component={TagsScreen}
        options={{headerShown: false}}
      />
    </TagsStack.Navigator>
  );
};

export default TagsNav;
