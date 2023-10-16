import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CaffeeNav from './CaffeeNav';
import TagsNav from './TagsNav';
import ProfileNav from './ProfileNav';
import HomeNav from './HomeNav';
import BottomTab from '../components/BottomNav/BottomTab';
import {SvgXml} from 'react-native-svg';
import indexXML from '../assets/svg/indexXML';

const Tab = createBottomTabNavigator();
const MainNav = () => {
  const TabIcon =
    iconName =>
    ({focused, color, size}) => {
      console.log('hee', iconName);
      return (
        <View style={styles.activeIconContainer}>
          {focused ? (
            <SvgXml width={25} height={25} xml={iconName.focus} />
          ) : (
            <SvgXml width={25} height={25} xml={iconName.nor} />
          )}
        </View>
      );
    };
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <BottomTab {...props} />}>
        <Tab.Screen
          name="HomeNav"
          component={HomeNav}
          options={{
            headerShown: false,
            tabBarIcon: TabIcon({
              nor: indexXML.Home_Normal,
              focus: indexXML.Home_Focus,
            }),
          }}
        />
        <Tab.Screen
          name="CaffeeNav"
          component={CaffeeNav}
          options={{
            headerShown: false,
            tabBarIcon: TabIcon({
              nor: indexXML.Caffee_Normal,
              focus: indexXML.Caffee_Focus,
            }),
          }}
        />
        <Tab.Screen
          name="TagsNav"
          component={TagsNav}
          options={{
            headerShown: false,
            tabBarIcon: TabIcon({
              nor: indexXML.Tags_Normal,
              focus: indexXML.Tags_Focus,
            }),
          }}
        />
        <Tab.Screen
          name="ProfileNav"
          component={ProfileNav}
          options={{
            headerShown: false,
            tabBarIcon: TabIcon({
              nor: indexXML.Profile_Normal,
              focus: indexXML.Profile_Focus,
            }),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  activeIconContainer: {
    width: 45,
    height: 35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainNav;
