import { FilterOptions, ToDoData } from "store/IApp";


/** To filter the Data Table based on the search value and drop down. Assuming that the input is case insensitve  */
export const getDataTableFilteredData=(data:ToDoData[],filters:FilterOptions)=>{
    let filteredData:ToDoData[] =data
    if(filters.searchValue !==undefined){
        let value:string = filters.searchValue
        filteredData = filteredData?.filter((item: ToDoData) => {
            return item.title.includes(value.toLowerCase())
          })
    }
    if(filters.dropdownValue !==undefined){
        let dropdownValue:boolean = filters.dropdownValue
        filteredData = filteredData?.filter((item: ToDoData) => {
            return item.completed === dropdownValue
          })
    }
    return filteredData
}