import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { FilterOptions, ToDoData, ToDoState } from 'store/IApp'
import './Dropdown.css'

/** assuming that the options are only 3 options so hard coding instead of fetching from existing data */
const options = [
  { key: 1, text: 'yes', value: true },
  { key: 2, text: 'no', value: false},
  { key: 3, text: '-', value: ''},
]

export interface IAppDropdownProps{
  setToDoFilterData:(data:ToDoData[],filters:FilterOptions)=>void
  todoState:ToDoState  
  setFilters:(filterOptions:FilterOptions)=>void
}
interface IAppDropdownState{
}

class AppDropdown extends React.Component<IAppDropdownProps,IAppDropdownState>{
 
 
  /** method to modify the table data on click of the drop down**/
  HandleDropdownChange = (event: any,val:any) => {  
    let options:FilterOptions
    if(val.value!=='' ){
    options = {...this.props.todoState.filterOption,dropdownValue:val.value}
   
    }
    else{
      options = {...this.props.todoState.filterOption,dropdownValue:undefined}
    }
    this.props.setFilters(options)    
    this.props.setToDoFilterData(this.props.todoState?.tododata,options)
  }

  render(){
    return(
    <div className='dropdown'>
    <h3 className='standardText'>Completed:</h3>
    <Dropdown className='dropdownInput' clearable options={options} defaultValue='' selection onChange={this.HandleDropdownChange} />
    </div>
    )
  }
}

export default AppDropdown
