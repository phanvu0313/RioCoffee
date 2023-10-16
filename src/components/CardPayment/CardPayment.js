import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors/Colors';

const CardPayment = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.topCard}>
        <Text style={styles.balanceText}>Your card balance</Text>
        <Text style={styles.moneyNumberText}>$23.00</Text>
      </View>
      <View style={styles.bottomCard}></View>
    </View>
  );
};

export default CardPayment;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.BACKGROUND_WHITE,
    borderRadius: 20,
  },
});
