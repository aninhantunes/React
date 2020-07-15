import * as loginActions from './loginActions';
import LoginManager from '../loginManager';
export const userLogin = (data) => async(dispatch) => {
    try{
        const response = await LoginManager.userLogin(data);
        
        if(response){
            dispatch(loginActions.saveDataLogin(response));
            localStorage.setItem('userData', JSON.stringify(response));
        }
    }catch(error){
        console.log('try',error);
        
    }
}

export const userPersistDataLogin = () => async(dispatch) => {
    const cacheUserData = localStorage.getItem('userData');
    if(!!cacheUserData){
        dispatch(loginActions.saveDataLogin(JSON.parse(cacheUserData)));
    }
}
