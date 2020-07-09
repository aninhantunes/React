import * as loginActions from './loginActions';
import LoginManager from '../loginManager';
export const userLogin = (data) => async(dispatch) => {
    try{
        const response = await LoginManager.userLogin(data);
        
        if(response){
            dispatch(loginActions.saveDataLogin(response))
        }
    }catch(error){
        console.log('try',error);
        
    }
}