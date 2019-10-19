import React from 'react';
import ToDoListTask from "./ToDoListTask";

class ToDoListTasks extends React.Component {
    render = () => {

        let tasksElements = this.props.tasks.map(
            task => <ToDoListTask task = {task} changeStatus={this.props.changeStatus}/>
        )

        return (
            <div className="ToDoListTasks">
                {tasksElements}
            </div>
        );
    }
}

export default ToDoListTasks;
