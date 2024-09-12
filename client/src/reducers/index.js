
import { combineReducers } from 'redux';
import authReducers from './authReducer';
import postReducer from './postReducers';

const rootReducer = combineReducers({
    auth: authReducers, 
    postReducer
  
});

export default rootReducer;
