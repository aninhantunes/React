import {SAVE_DATA_LOGIN} from './loginActions';

const INITIAL_STATE = {
    email : '',
    birthDate: '',
    fullName: '',
    authentication: false,
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SAVE_DATA_LOGIN:
            const data = action.payload;
            return{
                ...state,
                email: data.email,
                birthDate: data.birthDate,
                fullName: data.Name,

                authentication: !!data.email,
            };
        default:
            return state;
    }
}