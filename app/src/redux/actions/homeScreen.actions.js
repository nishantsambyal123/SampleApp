import {
  DUMMY_API_SUCCESS,
  DUMMY_API_PROGRESS,
  DUMMY_API_FAILURE,
} from '../actionConstants/index';
import ActionDispatcher from '../../config/network/actionDispatcher';
import {getDummyApiServiceRequest} from '../../config/network/serviceRequests/homeScreenServiceRequest';

export function callDummyApi() {
  return ActionDispatcher(
    getDummyApiServiceRequest,
    DUMMY_API_SUCCESS,
    DUMMY_API_FAILURE,
    DUMMY_API_PROGRESS,
  );
}
