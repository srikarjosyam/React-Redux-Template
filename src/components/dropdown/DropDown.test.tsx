import React from 'react';
import { render} from '@testing-library/react';
import Dropdown, { IAppDropdownProps } from './DropDown'

test('renders without crashing', () => {
  let props:IAppDropdownProps ={setToDoFilterData:jest.fn(),setFilters:jest.fn(),
    todoState:{ErrorLoadingData:false,isDataLoading:true,
      filterOption:{dropdownValue:undefined,searchValue:undefined},filteredtodoData:[],tododata:[]}}
    const wrapper = render(<Dropdown {...props} />);
    const title = wrapper.getByText("Completed:");
    expect(title).toBeInTheDocument();
});

test('when dropdown is selected', () => {
  let props:IAppDropdownProps ={setToDoFilterData:jest.fn(),setFilters:jest.fn(),
    todoState:{ErrorLoadingData:false,isDataLoading:true,
      filterOption:{dropdownValue:false,searchValue:'de'},filteredtodoData:[],tododata:[{id: 1,
        title: "delectus aut autem",userid:1,
        completed: false}]}}
    const wrapper = render(<Dropdown {...props} />);
    const title = wrapper.getByText("Completed:");
    expect(title).toBeInTheDocument();
});
