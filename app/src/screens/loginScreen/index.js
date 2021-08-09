import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from '../../components';

const login = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.formView}>
        <TextInput style={styles.inputText} placeholder={'Username'} />
        <View style={styles.bottomTextInput}>
          <TextInput style={styles.inputText} placeholder={'Password'} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  formView: {
    flex: 1,
    width: '80%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  inputText: {
    // width: '80%',
  },
  bottomTextInput: {
    marginTop: 10,
  },
});

export default login;
