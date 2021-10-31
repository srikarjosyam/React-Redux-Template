import React from 'react';
import { render} from '@testing-library/react';
import DataTable, { IDataTableProps } from './DataTable'

test('renders without crashing', () => {
  let props:IDataTableProps ={getToDoData:jest.fn(),
    todoState:{ErrorLoadingData:false,isDataLoading:true,
      filterOption:{dropdownValue:undefined,searchValue:undefined},filteredtodoData:[],tododata:[]}}
    const wrapper = render(<DataTable {...props} />);
    const title = wrapper.getByText("Loading");
    expect(title).toBeInTheDocument();
});

test('error message when api fails', () => {
    let props:IDataTableProps ={getToDoData:jest.fn(),
      todoState:{ErrorLoadingData:true,isDataLoading:false,
        filterOption:{dropdownValue:undefined,searchValue:undefined},filteredtodoData:[],tododata:[]}}
      const wrapper = render(<DataTable {...props} />);
      const title = wrapper.getByText("Error Occurred While Loading Data");
      expect(title).toBeInTheDocument();
  });

  test('when filter is applied', () => {
    let props:IDataTableProps ={getToDoData:jest.fn(),
      todoState:{ErrorLoadingData:false,isDataLoading:false,
        filterOption:{dropdownValue:true,searchValue:'de'},filteredtodoData:[],tododata:[{id: 1,
            title: "delectus aut autem",userid:1,
            completed: false}]}}
      const wrapper = render(<DataTable {...props} />);
      const title = wrapper.getByText("Title");
      expect(title).toBeInTheDocument();
  });

  test('when dropdown is changed', () => {
    let props:IDataTableProps ={getToDoData:jest.fn(),
      todoState:{ErrorLoadingData:false,isDataLoading:false,
        filterOption:{dropdownValue:false,searchValue:'de'},filteredtodoData:[{id: 1,
            title: "delectus aut autem",userid:1,
            completed: false}],tododata:[{id: 1,
                title: "delectus aut autem",userid:1,
                completed: false}]}}
      const wrapper = render(<DataTable {...props} />);
      const title = wrapper.getByText("Title");
      expect(title).toBeInTheDocument();
  });