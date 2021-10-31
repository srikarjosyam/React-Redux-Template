import React from 'react'
import { Input } from 'semantic-ui-react'
import { debounce } from 'lodash';
import { FilterOptions, ToDoData, ToDoState } from 'store/IApp'
import './SearchBar.css'


export interface ISearchBarProps {
  setToDoFilterData: (data:ToDoData[],filters:FilterOptions) => void
  todoState: ToDoState
  setFilters:(filterOptions:FilterOptions)=>void
}
interface ISearchBarState {
  searchvalue: string | undefined
}

export class SearchBar extends React.Component<ISearchBarProps, ISearchBarState>{

  constructor(props: ISearchBarProps) {
    super(props)
    this.changeDataTableSelection = debounce(this.changeDataTableSelection.bind(this), 500);
  }


  /** method to handle the onChange event */
  handleChange(val: any) {
    let edata = { id: val.id, target: val.target }
    this.changeDataTableSelection(edata)
  };

  /** method to change the table data*/
  changeDataTableSelection = (event: any) => {
    let options:FilterOptions
    if(event.target.value !== ''){
    options = {...this.props.todoState.filterOption,searchValue:event.target.value}
    }
    else{
     options = {...this.props.todoState.filterOption,searchValue:undefined}    
    }
    this.props.setFilters(options)   
    this.props.setToDoFilterData(this.props.todoState?.tododata,options)
  }



  render() {
    return (<div className='searchBar'>
      <h3 className='standardText'>Search:</h3>
      <Input className='inputBox' size="huge" placeholder='keyword...' onChange={(val) => this.handleChange(val)} />
    </div>)
  }
}
