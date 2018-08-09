import React, {Component} from 'react';
import './Task.css';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskId: props.taskId,
            taskValue: props.task,
            isEditing: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleEditClick = this.handleClick.bind(this);
        this.updateTask = this.updateTask.bind(this);
      }

    
    handleEditClick = (event) => {
        this.setState( {
            isEditing: true
        });
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
        console.log(this.state.taskId);

    }

    render() {
        if (this.state.isEditing) {
            return(
                <p className="Task">
                    <input type="text" 
                      value={this.state.taskValue}
                      onClick={this.handleClick}
                      onChange={this.updateTask}
                    />
                </p>
            );
        }
        return(
            <p className="Task">
              { this.props.task }
              <button
                onClick={(e) => this.handleEditClick(e)}
              >
                Edit Task
              </button>
              <button className="completeTask" 
                onClick={(e) => this.props.completeTask(this.props.task, e)}
              >
              </button>
              <button className="deleteTask" 
                onClick={(e) => this.props.removeTask(this.props.task, e)}
              >
              </button> 
            </p>
                

        )
    }
}


export default Task;