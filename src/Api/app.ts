import { AxiosResponse } from "axios";
import BaseAPI, { axiosInstance } from "./baseapi";

class App extends BaseAPI{

    public  getToDoData = async()=>{
        let response:AxiosResponse
        try{
            response = await axiosInstance.get('/todos')
        }
        catch(error:any){
          response = this.handleError(error);
        }        
        return response
    }

}

/** return new instance of App as it is a class , we can make it a singleton class if necessary */

export default new App();