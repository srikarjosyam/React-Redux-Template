import {combineReducers} from 'redux'
import appReducer from '_duck/appReducer';


/** root reducer which is a function which has the output of all the combined reducers */
const rootReducer = ()=> combineReducers({
    app: appReducer
})

export default rootReducer;