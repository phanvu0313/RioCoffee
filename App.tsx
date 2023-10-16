import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainNav from './src/navigations/MainNav';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <MainNav />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
