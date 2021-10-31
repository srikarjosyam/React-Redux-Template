import { ToDoState } from "store/IApp";
import actionTypes from "./action-types";
import { IAction } from "./IAction";

const initialState: ToDoState = {
    isDataLoading: false,
    ErrorLoadingData: false,
    tododata: [],
    filteredtodoData: [],
    filterOption:{searchValue:undefined,dropdownValue:undefined}
}

export const ToDoReducer = (state: ToDoState = initialState, action: IAction) => {
    switch (action.type) {
        case actionTypes.ToDOState_Is_Data_Loading:
            return {
                ...state,
                isDataLoading: action.payload
            }
        case actionTypes.ToDOState_Is_Error_Loading_Data:
            return {
                ...state,
                ErrorLoadingData: action.payload
            }
        case actionTypes.ToDoState_Save_Data:
            return {
                ...state,
                tododata: action.payload
            }
        case actionTypes.ToDoState_Set_Filtered_Data:
            return {
                ...state,
                filteredtodoData: action.payload,
                isFilteredData: true
            }
        case actionTypes.ToDoState_Set_Filter_Options:
                return {
                    ...state,
                    filterOption:action.payload
                }
        default:
            return state
    }
}


export default ToDoReducer

