import React from 'react';

class ToDoListHeader extends React.Component {

    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();
    }

    onAddTaskClick = () => {
        let newText = this.newTaskTitleRef.current.value;
        setTimeout(()=>{
            this.newTaskTitleRef.current.value = "";
        },1000);
        this.props.addTask(newText);
    }

    render = () => {
        return (
            <div className="ToDoListHeader">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input ref={this.newTaskTitleRef} type="text" placeholder="enter new task"/>
                    <button onClick = {this.onAddTaskClick}>Add</button>
                </div>
            </div>
        );
    }
}

export default ToDoListHeader;