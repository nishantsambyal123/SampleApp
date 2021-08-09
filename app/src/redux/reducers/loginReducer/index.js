import {SAVE_LOGIN_USER, GET_LOGIN_USER} from '../../actionConstants';
const initialState = {
  isLoading: false,
  isError: false,
  data: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_LOGIN_USER: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case GET_LOGIN_USER: {
      return {
        ...state,
        data: action.payload,
      };
    }
  }
  return state;
}
