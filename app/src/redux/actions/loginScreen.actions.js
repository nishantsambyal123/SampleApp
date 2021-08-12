import {setAsyncStorage, getAsyncStorage} from '../../utils/asyncStorage';
import {LOGGED_IN_USER} from '../../constants/keys';
import {includeInArray, searchUser} from '../../utils/utilityFunction';
import {
  SAVE_LOGIN_USER,
  GET_LOGIN_USER,
  SAVE_LOGIN_USER_ERROR,
  LOGIN_USER_FAILED,
  CLEAR_LOGIN_REDUCER,
  LOGOUT_USER,
} from '../actionConstants/index';

export function loginUser(userInfo) {
  return dispatch => {
    getAsyncStorage(LOGGED_IN_USER)
      .then(data => {
        if (data) {
          const user = searchUser(
            JSON.parse(data),
            'username',
            'password',
            userInfo.username,
            userInfo.password,
          );
          if (user) {
            dispatch({
              type: GET_LOGIN_USER,
              payload: user,
            });
          } else {
            dispatch({
              type: LOGIN_USER_FAILED,
            });
          }
        } else {
          dispatch({
            type: LOGIN_USER_FAILED,
          });
        }
      })
      .catch(err => console.log('Error while get login details', err));
  };
}

export function registerUser(userInfo) {
  return dispatch => {
    getAsyncStorage(LOGGED_IN_USER)
      .then(data => {
        if (data) {
          const userExist = includeInArray(
            JSON.parse(data),
            'username',
            userInfo.username,
          );
          if (!userExist) {
            let users = JSON.parse(data);
            users.push(userInfo);
            setAsyncStorage(LOGGED_IN_USER, JSON.stringify(users));
            dispatch({
              type: SAVE_LOGIN_USER,
              payload: userInfo,
            });
          } else {
            dispatch({
              type: SAVE_LOGIN_USER_ERROR,
            });
          }
        } else {
          setAsyncStorage(LOGGED_IN_USER, JSON.stringify([userInfo]));
          dispatch({
            type: SAVE_LOGIN_USER,
            payload: userInfo,
          });
        }
      })
      .catch(err => console.log('Error while get login details', err));
  };
}
export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}
export function clearReducer() {
  return {
    type: CLEAR_LOGIN_REDUCER,
  };
}
