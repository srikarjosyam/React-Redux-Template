import React from 'react';
import { render} from '@testing-library/react';
import BodyComponent, { IBodyProps } from './Body'

test('renders without crashing', () => {
  let props:IBodyProps ={getToDoData:jest.fn(),setFilters:jest.fn(),setToDoFilterData:jest.fn(),
    todoState:{ErrorLoadingData:false,isDataLoading:true,
      filterOption:{dropdownValue:undefined,searchValue:undefined},filteredtodoData:[],tododata:[]}}
    const wrapper = render(<BodyComponent {...props} />);
    const title = wrapper.getByText("Loading");
    expect(title).toBeInTheDocument();
});
