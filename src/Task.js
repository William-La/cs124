import React from "react"
import "./Task.css"
import Checkbox from "./Checkbox"
import Dropdown from "./Dropdown"

function Task(props) {
    return <div>
        <div class="todo-task" id={props.a}>
            <Checkbox completed={props.a.completed} onCompleted={() => props.onCompleted(props.a.id)}/>
            <div class="todo-item">
                {props.a.completed ? <p class="task-text" id="complete">{props.a.title}</p> : <p class="task-text">{props.a.title}</p>}
                <div class="todo-edit">
                <Dropdown class="dropdown-bar" id={props.a.id} title={props.a.title} onDeleteTask={() => props.onDeleteTask(props.a.id)} onEditTask={props.onEditTask}/>
                </div> 
            </div>
        
           

        </div>
    </div>

}

export default Task;