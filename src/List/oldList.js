import React, { Component } from 'react';
import './List.css';
import Task from '../Task/Task';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskCount: 0,
            taskArray: []
        };

        this.handleAddTaskClick = this.handleAddTaskClick.bind(this);
        this.handleDoneTaskClick = this.handleDoneTaskClick.bind(this);
        this.handleRemoveTaskClick = this.handleRemoveTaskClick.bind(this);

      }

/*
      listItem(props) {
          return <li>{props.value}</li>
      }
*/

/*
      fullList(){
          var listItems = this.state.taskArray.map((index) => 
            <listItem key={index.toString()}
                value={index} />
        );
      }
*/
      handleAddTaskClick = (event) => {
        var tasks = [];
        for(var i = 0; i <= this.state.taskCount; ++i){
            tasks.push(i)
            console.log(i)
        }
        console.log(tasks)

        this.setState(
            (state) => ({ 
                taskArray: tasks,
                taskCount: state.taskCount + 1})
        )
        console.log(this.state.taskCount)
    }      

    handleDoneTaskClick = (id, event) => {        
        console.log(id);    

        var tasks = [];
        for(var i = 0; i < this.state.taskCount - 1; ++i){
            tasks.push(i)
        }

        this.setState(
            (state) => ({ 
                taskArray: tasks,
//                taskCount: state.taskCount - 1})
        )

    }

    handleRemoveTaskClick = (id, event) => {
        console.log(id);    

        var tasks = [];
        for(var i = 0; i < this.state.taskCount - 1; ++i){
            tasks.push(i)
        }

        this.setState(
            (state) => ({ 
                taskArray: tasks,
//                taskCount: state.taskCount - 1})
        )
    }
/*
    Have to put the submit buttons in the render so that I have control
    of the state still, otherwise I think I do not have access to the list
    state inside of the Task.js file (where i originally had the submit buttons)
*/

    render() {
        let fullList = this.state.taskArray.map((i) => {
            return <li key={i} className="cssTask">
            <Task taskId={i}/>
            <input type="submit" className="completeTask" value="Done!" onClick={(e) => this.handleDoneTaskClick(i, e)}/>
            <input type="submit" className="deleteTask" value="Remove" onClick={(e) => this.handleRemoveTaskClick(i, e)}/>            
            </li>           
        })

        return(
            <div className="List">
                <p>Enjoy your Tasks!</p>
                <ul>
                    {fullList}
                </ul>

                <input type="submit" 
                value="Add a Task"
                onClick={this.handleAddTaskClick}/>
            </div>
                
        )
    }
}


export default List;