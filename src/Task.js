import React from "react"
import "./Task.css"
import Checkbox from "./Checkbox"
import Dropdown from "./Dropdown"

function Task(props) {
    return <div>
        <div class="todo-task" id={props.a}>
            {/* Checks if a task has to render a checkbox if completed. */}
            <Checkbox completed={props.a.completed} onCompleted={() => props.onCompleted(props.a.id)}/>
            <div class="todo-item">
                {/* Checks if a task needs to be crossed out if completed. */}
                {props.a.completed ? <p class="task-text" id="complete">{props.a.title}</p> : <p class="task-text">{props.a.title}</p>}
                <div class="todo-edit">
                    {/* Adds the dropdown box to edit and delete per task. */}
                <Dropdown class="dropdown-bar" id={props.a.id} title={props.a.title} onDeleteTask={() => props.onDeleteTask(props.a.id)} onEditTask={props.onEditTask}/>
                </div> 
            </div>
        </div>
    </div>
}
export default Task;