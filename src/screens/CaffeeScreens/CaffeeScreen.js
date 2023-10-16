import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CaffeeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CaffeeScreen</Text>
    </View>
  );
};

export default CaffeeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a8dadc',
  },
});
