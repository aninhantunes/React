import RegisterService from './registerService';

class RegisterManager {
    async userRegister (data){
        return await RegisterService.userRegister(data)
        .then(response => {
            return{
                email: data.email,
            };
        })
        .catch(error => {
            console.log(error);
            
        })
        
    }

}

export default new RegisterManager();