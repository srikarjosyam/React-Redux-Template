import React from 'react';
import { render} from '@testing-library/react';
import { SearchBar,ISearchBarProps } from './SearchBar'

test('renders without crashing', () => {
  let props:ISearchBarProps ={setToDoFilterData:jest.fn(),setFilters:jest.fn(),
    todoState:{ErrorLoadingData:false,isDataLoading:true,
      filterOption:{dropdownValue:undefined,searchValue:undefined},filteredtodoData:[],tododata:[]}}
    const wrapper = render(<SearchBar {...props} />);
    const title = wrapper.getByText("Search:");
    expect(title).toBeInTheDocument();
});

test('when search value  is selected', () => {
  let props:ISearchBarProps ={setToDoFilterData:jest.fn(),setFilters:jest.fn(),
    todoState:{ErrorLoadingData:false,isDataLoading:true,
      filterOption:{dropdownValue:false,searchValue:'de'},filteredtodoData:[],tododata:[{id: 1,
        title: "delectus aut autem",userid:1,
        completed: false}]}}
    const wrapper = render(<SearchBar {...props} />);
    const title = wrapper.getByText("Search:");    
    expect(title).toBeInTheDocument();
});
