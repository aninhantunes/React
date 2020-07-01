export const SAVE_DATA_REGISTER = 'register/SAVE_DATA_REGISTER';

const saveDataRegister = (dataRegister) => {
    return {
        type: SAVE_DATA_REGISTER,
        payload: dataRegister,
    };
};

export {saveDataRegister};