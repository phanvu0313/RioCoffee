import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors/Colors';

const RewardScreen = () => {
  return (
    <View style={styles.container}>
      <Text>RewardScreen</Text>
    </View>
  );
};

export default RewardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY_LIGHT_300,
  },
});
