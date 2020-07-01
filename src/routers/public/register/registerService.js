import axios from 'axios';

class RegisterService{
    async userRegister ({email, password, birth, name}){
        return axios.put(`${process.env.REACT_APP_API_URL}user/register/`, {
            params:{email, password, birthDate:birth, fullName:name}
        })
    }
}

export default new RegisterService();