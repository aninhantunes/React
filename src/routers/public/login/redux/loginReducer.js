import {SAVE_DATA_LOGIN, USER_LOG_OFF} from './loginActions';

const INITIAL_STATE = {
    email : '',
    birthDate: '',
    fullName: '',
    userPhoto: '',
    id: 0,
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
                fullName: data.fullName,
                userPhoto: data.userPhoto,
                id: data.id,
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