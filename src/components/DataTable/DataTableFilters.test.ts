import { getDataTableFilteredData } from "./DataTable-Filters";

test('renders without crashing', () => {
  
    const data = getDataTableFilteredData([],{dropdownValue:undefined,searchValue:undefined})
    expect(data).not.toBeNull()
});
