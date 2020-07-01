import {SAVE_DATA_REGISTER} from './registerActions';

const INITIAL_STATE = {
    email : '',
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SAVE_DATA_REGISTER:
            const email = action.payload.email;
            return{
                ...state,
                email,
            };
        default:
            return state;
    }
}