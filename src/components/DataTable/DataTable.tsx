import React from "react"
import { Dimmer, Segment, Table, Loader, Image, Message } from "semantic-ui-react"
import { ToDoData, ToDoState } from "store/IApp"
import './DataTable.css'

export interface IDataTableProps {
    getToDoData: () => void
    todoState: ToDoState
}

export interface IDataTableState {
    displayMessage: boolean
}

export default class DataTable extends React.Component<IDataTableProps, IDataTableState>{

    constructor(props: any) {
        super(props)
        this.state = { displayMessage: false }
    }

    componentDidMount() {
        this.props.getToDoData();
    }

    componentDidUpdate(prevProps:IDataTableProps) {
        if(this.props.todoState !== prevProps.todoState){
            if ((this.props.todoState.filterOption.dropdownValue !== undefined) ||
                (this.props.todoState.filterOption.searchValue !== undefined)) {
                if (this.props.todoState.filteredtodoData &&
                    this.props.todoState.filteredtodoData.length === 0) {
                    this.setState({ displayMessage: true })
                }
                else{
                    this.setState({ displayMessage: false })
                }
        }
        else{
            this.setState({ displayMessage: false })
        }
       }
    }

    /** Triggers a initial load to fetch the data */
    LoaderComponent = () => {
        return (
            <Segment>
                <Dimmer active inverted>
                    <Loader inverted content='Loading' />
                </Dimmer>
                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </Segment>
        )
    }


    /** this function is used to return the Table Rows based on the data defined. 
     * Currently did not add provision for either virtual scroll or paging*/
    getTableData = () => {
        if ((this.props.todoState.filterOption.dropdownValue !== undefined) ||
            (this.props.todoState.filterOption.searchValue !== undefined)) {
            return this.props.todoState.filteredtodoData &&
                this.props.todoState.filteredtodoData.map((item: ToDoData) => {
                    return (<Table.Row>
                        <Table.Cell>{item.id}</Table.Cell>
                        <Table.Cell>{item.title}</Table.Cell>
                        <Table.Cell>{item.completed ? "yes" : "no"}</Table.Cell>
                    </Table.Row>)
                })
        }
        else {
            if (this.props.todoState.tododata && this.props.todoState.tododata.length > 0) {
                return this.props.todoState.tododata.map((item: ToDoData) => {
                    return (<Table.Row>
                        <Table.Cell>{item.id}</Table.Cell>
                        <Table.Cell>{item.title}</Table.Cell>
                        <Table.Cell>{item.completed ? "yes" : "no"}</Table.Cell>
                    </Table.Row>)
                })
            }
            else {
                return undefined
            }
        }
    }

    /** This function is used to render the table component */
    renderTable = () => {
        return (
            <Table unstackable celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell textAlign='center'>#</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Title</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Completed</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.getTableData()}
                </Table.Body>
            </Table>
        )
    }

    renderMsg(message: string) {
        return (<>
            <Message className='standardMsg' color='red'>{message}</Message>
        </>)
    }

    render() {
        return (
            <React.Fragment>
                {this.props.todoState.isDataLoading ?
                    this.LoaderComponent() :
                    this.props.todoState.ErrorLoadingData ? this.renderMsg('Error Occurred While Loading Data') :
                        this.state.displayMessage ? this.renderMsg('No result for the given search parameters!') :
                            this.renderTable()
                }
            </React.Fragment>
        )
    }
}