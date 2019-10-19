import React from 'react';
import './App.css';
import ToDoListHeader from "./ToDoListHeader";
import ToDoListTasks from "./ToDoListTasks";
import ToDoListFooter from "./ToDoListFooter";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();
    }

    addTask = (newText) =>{
        let newTask = {
            title: newText,
            isDone: false,
            priority: " med"
        };
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        });
    }

    changeFilter = (newFilterValue) =>{
        this.setState({
            filterValue:newFilterValue
        });
    }

    changeStatus =(task,isDone)=>{
        let newTasks = this.state.tasks.map(t => {
            if (t !== task) {
                return t;
            } else {
                return {...t, isDone: isDone};
            }
        });
        this.setState({
            tasks:newTasks
        })
    };

    state = {
        tasks: [
            {title: "JS", isDone: true, priority: " high"},
            {title: "CSS", isDone: false, priority: " med"},
            {title: "HTML", isDone: false, priority: " low"},
            {title: "React", isDone: false, priority: " high"}
        ],

        filterValue: "Completed"
    }

    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <ToDoListHeader addTask={this.addTask}/>
                    <ToDoListTasks changeStatus={this.changeStatus}
                                    tasks={this.state.tasks.filter(t => {
                        if(this.state.filterValue === 'All'){
                            return true;
                        } else
                            if(this.state.filterValue === 'Completed'){
                                return t.isDone === true;
                            } else
                                if(this.state.filterValue === 'Active'){
                                    return t.isDone === false;
                                }
                    })}/>
                    <ToDoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;