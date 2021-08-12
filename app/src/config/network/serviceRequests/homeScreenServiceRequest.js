import request from '../service';
import {DUMMY_API} from '../../../constants/urls';
export function getDummyApiServiceRequest() {
  return request(DUMMY_API, 'GET');
}
