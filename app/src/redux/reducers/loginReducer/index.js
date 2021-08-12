import {
  SAVE_LOGIN_USER,
  SAVE_LOGIN_USER_ERROR,
  GET_LOGIN_USER,
  LOGIN_USER_FAILED,
  CLEAR_LOGIN_REDUCER,
  LOGOUT_USER,
} from '../../actionConstants';
const initialState = {
  isLoading: false,
  isError: false,
  isLoggedIn: false,
  data: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_LOGIN_USER: {
      return {
        ...state,
        isError: false,
        data: action.payload,
        isLoggedIn: true,
      };
    }
    case SAVE_LOGIN_USER_ERROR: {
      return {
        ...state,
        error: 100,
        isError: true,
      };
    }
    case GET_LOGIN_USER: {
      return {
        ...state,
        isError: false,
        data: action.payload,
        isLoggedIn: true,
      };
    }
    case LOGIN_USER_FAILED: {
      return {
        ...state,
        error: 101,
        isError: true,
      };
    }
    case CLEAR_LOGIN_REDUCER: {
      return {
        ...initialState,
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
  }
  return state;
}
