import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from './Auth/Reducer';
import customerProductReducer from './Product/Reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    product: customerProductReducer
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
