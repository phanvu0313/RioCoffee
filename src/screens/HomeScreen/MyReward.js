import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors/Colors';

import Images from '../../assets/img/Images';
import {useNavigation} from '@react-navigation/native';
const IMAGE_SIZE = 70;

const MyReward = () => {
  const navigation = useNavigation();
  const navigateToRewardScreen = () => {
    navigation.navigate('RewardScreen');
  };
  return (
    <TouchableOpacity
      style={styles.myRewardContainer}
      onPress={navigateToRewardScreen}>
      <View style={styles.iconContainer}>
        <Image
          style={{width: IMAGE_SIZE, height: IMAGE_SIZE}}
          source={Images.reward_coffee}
          resizeMode="contain"
        />
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.progressReward}>
          <Text style={styles.nameReward}>Free 1 coffee</Text>
          <Text style={styles.progressNumber}>
            <Text style={styles.currentNumber}>8</Text>/10
          </Text>
        </View>
        <Text style={styles.detailText}>
          Buy 10 Coffees and get 1 Coffee for free
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyReward;

const styles = StyleSheet.create({
  myRewardContainer: {
    backgroundColor: Colors.BACKGROUND_WHITE,
    height: 100,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  iconContainer: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  detailContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  progressReward: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameReward: {
    color: Colors.SECONDARY_DEFAULT,
    fontWeight: 'bold',
  },
  progressNumber: {
    color: Colors.SECONDARY_LIGHT_400,
    fontWeight: 'bold',
  },
  currentNumber: {
    color: Colors.PRIMARY_DEFAULT,
  },
  detailText: {
    color: Colors.SECONDARY_LIGHT_400,
  },
});
