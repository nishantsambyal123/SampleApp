import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const homeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Hi from Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
  },
});

export default homeScreen;
