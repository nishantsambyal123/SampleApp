import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ApiList = props => {
  const {
    item: {item: obj},
  } = props;
  // console.log('obj', obj);
  return (
    <View style={styles.mainContainer}>
      <Text>
        <Text>{obj.API}</Text>
        <Text>{obj.Category}</Text>
        <Text>{obj.Auth}</Text>
        <Text>{obj.Cors}</Text>
        <Text style={{color: 'red'}}>{obj.Link}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    margin: 5,
  },
});

export default ApiList;
