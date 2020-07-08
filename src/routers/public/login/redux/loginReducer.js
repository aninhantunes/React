import {SAVE_DATA_LOGIN} from './loginActions';

const INITIAL_STATE = {
    email : '',
    authentication: false,
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SAVE_DATA_LOGIN:
            const data = action.payload;
            return{
                ...state,
                ...data,
                authentication: true,
            };
        default:
            return state;
    }
}