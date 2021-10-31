import ToDoReducer from 'components/DataTable/_duck/reducer';
import {combineReducers} from 'redux'


/** app Reducer which combines below level reducers */

const appReducer = combineReducers({
    ToDoState:ToDoReducer
})

export default appReducer;