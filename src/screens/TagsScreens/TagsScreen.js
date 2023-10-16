import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TagsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>TagsScreen</Text>
    </View>
  );
};

export default TagsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#edede9',
  },
});
