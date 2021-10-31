import AppHeader from 'components/header/header';
import React from 'react';
import { Provider } from 'react-redux';
import setup from 'store/setup';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import BodyComponent from 'components/Body/Body';
import { FilterOptions, ToDoData, ToDoState } from 'store/IApp';
import { connect } from 'react-redux';
import { getToDoData, setFilters,setToDoFilterData } from 'components/DataTable/_duck/actions';

interface IToDoProps{
    getToDoData:()=>void
    todoState:ToDoState
    setToDoFilterData:(data:ToDoData[],filters:FilterOptions)=>void
    setFilters:(filterOptions:FilterOptions)=>void
}



function toDoPage(props:IToDoProps){
    return(
    <React.Fragment>
        <AppHeader/>
        <BodyComponent {...props}/>
    </React.Fragment>
    )
}

const mapStateToProps =(state:any,props:any)=>{
    return{
        todoState:state.app.ToDoState
    }
}


/** Main app is the HOC with redux connect wrapped around */

const MainApp = connect(mapStateToProps,{setFilters,getToDoData,setToDoFilterData})(toDoPage)


/** This function returns the Main app which has the redux Provider */
function App() {
    return (
        <Provider store={setup}>
           <MainApp/>
        </Provider>
    )
}





export default App;
