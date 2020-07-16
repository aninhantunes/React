export const SAVE_DATA_LOGIN = 'login/SAVE_DATA_LOGIN';
export const USER_LOG_OFF = 'login/USER_LOG_OFF'

const saveDataLogin = (dataLogin) => {
    return {
        type: SAVE_DATA_LOGIN,
        payload: dataLogin,
    };
};

const userLogOff = () => {
    return {
        type: USER_LOG_OFF,
    };
};



export {saveDataLogin, userLogOff};