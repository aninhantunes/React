import {combineReducers} from 'redux';
import {registerReducer} from '../routers/public/register/redux';

const reducers = combineReducers({
    register: registerReducer,
    
});

export default reducers;