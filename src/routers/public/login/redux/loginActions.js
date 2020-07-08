export const SAVE_DATA_LOGIN = 'login/SAVE_DATA_LOGIN';

const saveDataLogin = (dataLogin) => {
    return {
        type: SAVE_DATA_LOGIN,
        payload: dataLogin,
    };
};

export {saveDataLogin};