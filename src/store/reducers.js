import {combineReducers} from 'redux';
import {registerReducer} from '../routers/public/register/redux';
import {loginReducer} from '../routers/public/login/redux';

const reducers = combineReducers({
    register: registerReducer,
    login: loginReducer,
    
});

export default reducers;