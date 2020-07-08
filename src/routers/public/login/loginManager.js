import LoginService from './loginService';

class LoginManager {
    async userLogin (data){
        return await LoginService.userLogin(data)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
            
        })
        
    }

}

export default new LoginManager();