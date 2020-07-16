import {combineReducers} from 'redux';
//Add individual reducers
import testReducer from './testReducer';

const rootReducer = combineReducers({testReducer});
export default rootReducer;