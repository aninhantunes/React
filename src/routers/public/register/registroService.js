import axios from 'axios';

class RegisterService{
    async userRegister ({email, password, birth, name}){
        return axios.post('https://0041e684acf4.ngrok.io/api/v1/user/register/', {
            email, password, birthDate:birth, fullName:name
        })
    }
}

export default new RegisterService();