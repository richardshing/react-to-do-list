import React, {Component} from 'react';
import './Task.css';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskId: props.taskId,
            taskValue: "Enter Task: "
        };

        this.handleClick = this.handleClick.bind(this);
        this.updateTask = this.updateTask.bind(this);
      }


    updateTask = (event) => {
        this.setState( {
            taskValue: event.target.value
        });
    }

    handleClick = (event) => {
        if(this.state.taskValue == "Enter Task: "){
            this.setState( {
                taskValue: ""
            })
        }
        console.log(this.state.taskId)

    }

    render() {

        return(
            <p className="Task">
                <input type="text" 
                value={this.state.taskValue}
                onClick={this.handleClick}
                onChange={this.updateTask}/>
            </p>
                

        )
    }
}


export default Task;