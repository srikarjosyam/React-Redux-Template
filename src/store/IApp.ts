export interface IApp{
    /** todoDataState can be empty when initializing the Application*/
    todoDataState: ToDoState | {}
}


export interface ToDoState{
     /** to handle loading of data in react*/
    isDataLoading:boolean,
   
    /** to handle error while loading of data in react*/
    ErrorLoadingData:boolean,

     /** todoData will be an empty array before making api call*/
    tododata:Array<ToDoData>

    /** filtering the existing tododata*/
    filteredtodoData:Array<ToDoData> | undefined

    filterOption:FilterOptions
}

/** Filter Options for both Search and DropDown */
export interface FilterOptions{
    searchValue:string | undefined,
    dropdownValue: boolean | undefined
}

/** todoData interface */
export interface ToDoData{
    userid:number,
    id:number,
    title:string,
    completed:boolean
}