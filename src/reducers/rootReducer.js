import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import textReducer from './textReducer';
export default combineReducers({
 simpleReducer,
 textReducer
});