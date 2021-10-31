import axios, { AxiosResponse } from "axios"
import { API_BASEPATH, API_timeOut } from "config/config"


/** customized axios instance with base url and timeout for api , we can add headers and interceptors as need */

export const axiosInstance = axios.create({
    baseURL:API_BASEPATH,
    timeout:API_timeOut,

})

/** Implementation to handle Error for debugging and other purposes */
export default class BaseAPI{
    handleError(error:Error):AxiosResponse{
        if(error?.message){
            console.error(`error occurred  at : ${error.message} and stack trace is ${error?.stack}`)            
        }
        return {data:error,headers:{},status:0,statusText:'',config:{}}
    }
}