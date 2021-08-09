import React, {useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {View, KeyboardAvoidingView} from 'react-native';
import {connect} from 'react-redux';
import styles from './loginScreen.styles';
import {TextInput, Button} from '../../components';
import {isBlank} from '../../utils/utilityFunction';
import {loginUser} from '../../redux/actions/loginScreen.actions';
import Constants from '../../constants/constants';

const Login = props => {
  const {data, loginUser} = props;
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    console.log('loginScreenData', data);
  }, [data]);

  function loginUserClick() {
    if (!isBlank(username) && !isBlank(password)) {
      const userInfo = {username, password};
      loginUser(userInfo);
    }
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
            placeholder={Constants.USER_NAME}
            onChangeText={text => onChangeUsername(text)}
          />
          <View style={styles.bottomTextInput}>
            <TextInput
              placeholder={Constants.PASSWORD}
              secureTextEntry={true}
              onChangeText={text => onChangePassword(text)}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              title={Constants.REGISTER}
              onPress={loginUserClick}
            />
            <Button style={styles.button} title={Constants.LOGIN} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

function mapStateToProps({LoginReducer}) {
  return {data: LoginReducer.data};
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: bindActionCreators(loginUser, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
