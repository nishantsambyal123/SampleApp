import React, {useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {View, KeyboardAvoidingView, Alert} from 'react-native';
import {connect} from 'react-redux';
import styles from './loginScreen.styles';
import {TextInput, Button} from '../../components';
import {isBlank, showAlert} from '../../utils/utilityFunction';
import {
  loginUser,
  registerUser,
  clearReducer,
} from '../../redux/actions/loginScreen.actions';
import Constants from '../../constants/constants';
import {clearAsyncStorage} from '../../utils/asyncStorage';
import ErrorConst from '../../constants/errorConstants';

const Login = props => {
  const {callRegisterUser, callLoginUser, callClearReducer, error} = props;
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  useEffect(() => {
    switch (error) {
      case ErrorConst.ERROR_100: {
        showAlert(Constants.ERROR_REGISTER, resetTextFields);
        break;
      }
      case ErrorConst.ERROR_101: {
        showAlert(Constants.USER_LOGIN_FAILED, resetTextFields);
        break;
      }
    }
  }, [error]);

  const resetTextFields = () => {
    setUsername('');
    setPassword('');
  };

  function loginUserClick() {
    getUser()
      .then(user => {
        callLoginUser(user);
        callClearReducer();
      })
      .catch(err => console.log(err));
  }
  function registerUserClick() {
    getUser()
      .then(user => {
        callRegisterUser(user);
        callClearReducer();
      })
      .catch(err => console.log(err));
  }

  function getUser() {
    return new Promise(function (resolve, reject) {
      if (!isBlank(username) && !isBlank(password)) {
        const userInfo = {username, password};
        resolve(userInfo);
      } else {
        reject(new Error('Username or password is blank'));
      }
    });
  }

  function onChangeUsername(txtUsername) {
    setUsername(txtUsername);
  }
  function onChangePassword(txtPassword) {
    setPassword(txtPassword);
  }
  return (
    <View style={styles.mainContainer}>
      <KeyboardAvoidingView style={styles.mainContainer} behavior="padding">
        <View style={styles.formView}>
          <TextInput
            value={username}
            placeholder={Constants.USER_NAME}
            onChangeText={text => onChangeUsername(text)}
          />
          <View style={styles.bottomTextInput}>
            <TextInput
              value={password}
              placeholder={Constants.PASSWORD}
              secureTextEntry={true}
              onChangeText={text => onChangePassword(text)}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              title={Constants.REGISTER}
              onPress={registerUserClick}
            />
            <Button
              style={styles.button}
              title={Constants.LOGIN}
              onPress={loginUserClick}
            />
            {/* <Button
              style={styles.button}
              title={'clear'}
              onPress={() => {
                clearAsyncStorage();
              }}
            /> */}
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
function mapStateToProps({LoginReducer}) {
  return {
    error: LoginReducer.error,
    isError: LoginReducer.isError,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    callRegisterUser: bindActionCreators(registerUser, dispatch),
    callLoginUser: bindActionCreators(loginUser, dispatch),
    callClearReducer: bindActionCreators(clearReducer, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
