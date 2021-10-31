import DataTable from 'components/DataTable/DataTable'
import AppDropdown from 'components/dropdown/DropDown'
import { SearchBar } from 'components/SearchBar/SearchBar'
import React from 'react'
import { FilterOptions, ToDoData, ToDoState } from 'store/IApp'
import './Body.css'

export interface IBodyProps {
  getToDoData: () => void
  todoState: ToDoState
  setToDoFilterData: (data:ToDoData[],filters:FilterOptions) => void
  setFilters:(filterOptions:FilterOptions)=>void
}

const BodyComponent = (props: IBodyProps) => {

  return (
    <React.Fragment>
      <div className='TableHeaders'>
        <SearchBar {...props} />
        <AppDropdown {...props} />
      </div>
      <div className='DataTable'>
        <DataTable {...props} />
      </div>
    </React.Fragment>
  )
}

export default BodyComponent