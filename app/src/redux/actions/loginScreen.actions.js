import {setAsyncStorage, getAsyncStorage} from '../../utils/asyncStorage';
import {LOGGED_IN_USER} from '../../constants/keys';
import {SAVE_LOGIN_USER, GET_LOGIN_USER} from '../actionConstants/index';
export function getLoggedIn() {
  getAsyncStorage(LOGGED_IN_USER)
    .then(data => {
      return {
        type: GET_LOGIN_USER,
        payload: JSON.parse(data),
      };
    })
    .catch(err => console.log('Error while get login details', err));
}

export function loginUser(userInfo) {
  setAsyncStorage(LOGGED_IN_USER, JSON.stringify(userInfo));
  return {
    type: SAVE_LOGIN_USER,
    payload: userInfo,
  };
}
