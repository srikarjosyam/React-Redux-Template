import app from "Api/app";
import { AxiosResponse } from "axios";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { FilterOptions, ToDoData } from "store/IApp";
import { getDataTableFilteredData } from "../DataTable-Filters";
import actionTypes from "./action-types";

const getToDoData =()=> async(dispatch:ThunkDispatch<{},{},AnyAction>,getState:any)=>{
    /** filp the loading data to true */
    dispatch({
        type: actionTypes.ToDOState_Is_Data_Loading,
        payload:true
    });

    return app.getToDoData().then((response:AxiosResponse)=>{
        if(response.data && (response.status >= 200 && response.status<=299)){
            dispatch({
                type: actionTypes.ToDoState_Save_Data,
                payload:response.data
            })

            dispatch({
                type: actionTypes.ToDOState_Is_Data_Loading,
                payload:false 
            })
            dispatch({
                type: actionTypes.ToDOState_Is_Error_Loading_Data,
                payload:false 
            })
        }
        else{
            /** throwing new error as the status code is not 200 */
            throw new Error(response.data)
        }
      
    }).catch((error:any)=>{
        
        console.error(`erorr occurred ${error}`);

        /** changing isError to true and loading to false when error occurred */
        dispatch({
            type: actionTypes.ToDOState_Is_Data_Loading,
            paylod:false 
        })
        dispatch({
            type: actionTypes.ToDOState_Is_Error_Loading_Data,
            paylod:true 
        })
    })
}

const setToDoFilterData = (data:ToDoData[],filters:FilterOptions)=>{
    let filteredData:ToDoData[] = getDataTableFilteredData(data,filters)
    return {
        type: actionTypes.ToDoState_Set_Filtered_Data,
        payload:filteredData 
    }
}

const setFilters = (filterOption:FilterOptions)=>{
    return {
        type: actionTypes.ToDoState_Set_Filter_Options,
        payload:filterOption 
    }
}

export {getToDoData,setToDoFilterData,setFilters};