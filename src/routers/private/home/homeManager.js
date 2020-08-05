import HomeService from './homeService';

class HomeManager {
    async getProducts (){
        return await HomeService.getProducts()
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
            
        })
        
    }

}

export default new HomeManager();