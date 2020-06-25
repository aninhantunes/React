import axios from 'axios';

class LoginService{
    async userLogin ({email, password}){
        return axios.post(`${process.env.REACT_APP_API_URL}user/`, {
            params:{email, password}
        })
    }
}

export default new LoginService();