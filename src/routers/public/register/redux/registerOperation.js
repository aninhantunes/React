import * as registerActions from './registerActions';
import RegisterManager from '../registerManager';
export const userRegister = (data) => async(dispatch) => {
    try{
        const response = await RegisterManager.userRegister(data);
        if(response && response.email){
            dispatch(registerActions.saveDataRegister({email: response.email}))
        }
    }catch(error){
        console.log('try',error);
        
    }
}