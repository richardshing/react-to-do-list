import React, { Component } from 'react';
import './List.css';
import Task from '../Task/Task';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
          taskUniqId: 0,
          taskArray: []
        };

        this.handleAddTaskClick = this.handleAddTaskClick.bind(this);
        this.handleEditComplete = this.handleEditComplete.bind(this);
        this.handleRemoveTaskClick = this.handleRemoveTaskClick.bind(this);
        //this.UNSAFE_componentWillMount = this.UNSAFE_componentWillMount.bind(this);
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


    UNSAFE_componentWillMount() 
    {        
  
    }
    
    componentDidUpdate()
    {

    }

    componentDidMount() 
    { 
    }

      handleAddTaskClick = (event) => {
        event.preventDefault();
        const task = this.refs.newTask.value;
        this.setState(
            (state) => ({ 
                taskArray: [...state.taskArray, task],
                taskUniqId: state.taskUniqId + 1})
        )

        this.refs.newTask.value = "";
        console.log("add: " + this.state.taskUniqId)
        console.log("add: " + this.state.taskArray)
    }      

    handleEditComplete = (newTaskValue, originalValue, event) => {        
        console.log("Original: " + originalValue + "  New Value:" + newTaskValue);  
        
        var newArray = this.state.taskArray.slice();
        var editIndex = newArray.indexOf(originalValue);
        newArray[editIndex] = newTaskValue;
        this.setState({
            taskArray: newArray
        });
        console.log("Edit Index: " + editIndex);
        console.log(this.state.taskArray);
    }

/*      Tried to have taskCount to monitor the amount of tasks,
        but it didn't really work since I could have duplicate
        values in  the array and messes up mapping.

        var tasks = [];
        for(var i = 0; i < this.state.taskCount - 1; ++i){
            tasks.push(i)
        }
        this.setState(
            (state) => ({ 
                taskArray: tasks,
                taskCount: state.taskCount - 1})
        )
*/

    handleRemoveTaskClick = (task, event) => {
        console.log("remove " + task);    

        var newArray = this.state.taskArray.slice();
        var removeIndex = newArray.indexOf(task);
        newArray.splice(removeIndex, 1);
        this.setState(
            {
                taskArray: newArray
            }
        );        

/*      Tried to have taskCount to monitor the amount of tasks,
        but it didn't really work since I could have duplicate
        values in  the array and messes up mapping.

        var tasks = [];
        for(var i = 0; i < this.state.taskCount - 1; ++i){
            tasks.push(i)
        }
        this.setState(
            (state) => ({ 
                taskArray: tasks,
                taskCount: state.taskCount - 1})
        )
 */       
    }


/*
    Have to put the submit buttons in the render so that I have control
    of the state still, otherwise I think I do not have access to the list
    state inside of the Task.js file (where i originally had the submit buttons)
*/

    render() {
        let fullList = this.state.taskArray.map((task) => {
            console.log("task: " + task + " I: ") 
            return (
                <li key={task} className="cssTask">
                <Task taskId={task} task={task} 
                  editComplete={this.handleEditComplete}   
                  removeTask={this.handleRemoveTaskClick}
                />       
                </li>   
            );
        })

        return(
            <div className="List">
                <p>Enjoy your Tasks!</p>
                <ul>
                    {fullList}
                </ul>

                <form onSubmit={this.handleAddTaskClick}>
                  <input type="text" 
                    placeholder="Enter Task: "
                    ref="newTask"
                  />
                  <button>Add a Task</button>
                </form>

            </div>
                
        )
    }
}


export default List;