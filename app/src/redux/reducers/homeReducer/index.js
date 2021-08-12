import {
  DUMMY_API_SUCCESS,
  DUMMY_API_PROGRESS,
  DUMMY_API_FAILURE,
} from '../../actionConstants/index';

export const initialState = {
  isLoading: false,
  isError: false,
  data: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DUMMY_API_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    }
    case DUMMY_API_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        data: {},
      };
    }
    case DUMMY_API_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: {},
      };
    }
  }
  return state;
}
