import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAsyncStorage} from '../../utils/asyncStorage';
import {loginUser} from '../../redux/actions/loginScreen.actions';
import {LOGGED_IN_USER} from '../../constants/keys';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screens from '../../screens';

const AppStackEntry = props => {
  const {setLoggedInUser, isLoggedIn} = props;
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    getAsyncStorage(LOGGED_IN_USER).then(userInfo => {
      if (userInfo) {
        setLoggedInUser(userInfo);
      }
    });
  }, [setLoggedInUser]);

  function AuthStack() {
    return (
      <Stack.Navigator headerMode="screen">
        <Stack.Screen name="LoginScreen" component={Screens.LoginScreen} />
      </Stack.Navigator>
    );
  }
  function HomeStack() {
    return (
      <Stack.Navigator headerMode="screen">
        <Stack.Screen name="HomeScreen" component={Screens.HomeScreen} />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      {!isLoggedIn ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

function mapStateToProps({LoginReducer}) {
  return {isLoggedIn: LoginReducer.data};
}

function mapDispatchToProps(dispatch) {
  return {
    setLoggedInUser: bindActionCreators(loginUser, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppStackEntry);
