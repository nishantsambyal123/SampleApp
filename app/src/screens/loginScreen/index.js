import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {TextInput, Button} from '../../components';
import Constants from '../../constants/constants';

const login = () => {
  return (
    <View style={styles.mainContainer}>
      <KeyboardAvoidingView style={styles.mainContainer} behavior="padding">
        <View style={styles.formView}>
          <TextInput placeholder={Constants.USER_NAME} />
          <View style={styles.bottomTextInput}>
            <TextInput
              placeholder={Constants.PASSWORD}
              secureTextEntry={true}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button style={styles.button} title={Constants.REGISTER} />
            <Button style={styles.button} title={Constants.LOGIN} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  formView: {
    flex: 1,
    width: '70%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  bottomTextInput: {
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  button: {
    width: '40%',
  },
});

export default login;
