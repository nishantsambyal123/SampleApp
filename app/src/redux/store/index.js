import {createStore, applyMiddleware, combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';

let middleware = [ReduxThunk];

const createReduxStore = applyMiddleware(...middleware)(createStore);
const reducer = combineReducers(reducers);
const store = createReduxStore(reducer);

export default store;
