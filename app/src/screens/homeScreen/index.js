import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, Text} from 'react-native';

const homeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Hi from Home</Text>
    </View>
  );
};
function mapStateToProps({HomeReducer}) {
  return HomeReducer;
}
const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
  },
});

export default connect(mapStateToProps)(homeScreen);
