import rootReducer from "./root-reducer";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";

/** define initial state */
const initialState:any={}

const enhancers=[]

let middleware=[]

/** adding devTools Redux management in development environment */

if(process.env.NODE_ENV === 'development'){
    const devToolsExtension = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

    if(typeof devToolsExtension ==='function'){
        enhancers.push(devToolsExtension())
    }
}

/** pushing redux thunk to handle the asynchronous api calls */

middleware.push(thunk);

/** adding all the middlewares and enhancers defined */

const composedEnahancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

export default createStore(rootReducer(),initialState,composedEnahancers)
