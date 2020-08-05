import axios from 'axios';

class HomeService{
    async getProducts (){
        return axios.get(`${process.env.REACT_APP_API_URL}products/`, {
        })
    }
}

export default new HomeService();