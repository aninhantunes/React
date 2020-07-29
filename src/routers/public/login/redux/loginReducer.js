import {SAVE_DATA_LOGIN, USER_LOG_OFF} from './loginActions';

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
            console.log('trace 2', data);
            return{
                ...state,
                email: data.email,
                birthDate: data.birthDate,
                fullName: data.fullName,

                authentication: !!data.email,
            };
        case USER_LOG_OFF:
            return{
                ...INITIAL_STATE,
            };

        default:
            return state;
    }
}