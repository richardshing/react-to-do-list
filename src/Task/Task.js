import React, {Component} from 'react';
import './Task.css';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskId: props.taskId,
            taskValue: props.task,
            editOriginalValue: props.task,
            isEditing: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
      }

    
    handleEditClick = (event) => {
        this.setState( {
            isEditing: true
        });
        console.log("This click should be: " + this.state.taskValue);
    }

    updateTask = (event) => {
        this.setState( {
            taskValue: event.target.value,
        });
    }

    handleClick = (event) => {
        if (this.state.taskValue === "Enter Task: ") {
            this.setState( {
                taskValue: ""
            })
        } 
        console.log("THIS: " + this.state.taskId);

    }

    onSaveClick = (event) => {
        this.props.editComplete(this.state.taskValue, this.state.editOriginalValue, event)
        this.setState(  (state) => ({
            isEditing: false,
            editOriginalValue: this.state.taskValue
        }));
    }

    render() {
        if (this.state.isEditing) {
            console.log("Task Value in Conditional: " + this.state.taskValue)
            return(
                <p className="Task">
                    <input type="text" 
                      value={this.state.taskValue}
                      onClick={this.handleClick}
                      onChange={this.updateTask}
                    />
                    <button className="completeEdit"  
                        onClick={(e) => this.onSaveClick(e)}
                    >
                    </button>                    
                </p>
            );
        }
        else {
            return(
                <p className="Task">
                { this.props.task }
                <button
                    onClick={(e) => this.handleEditClick(e)}
                >
                    Edit Task
                </button>

                <button className="deleteTask" 
                    onClick={(e) => this.props.removeTask(this.props.task, e)}
                >
                </button> 
                </p>
                    

            );
        }
    }
}


export default Task;