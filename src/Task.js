import React from "react"
import "./Task.css"
import Checkbox from "./Checkbox"
import Dropdown from "./Dropdown"


function priorityColor(priority) {
    if (priority === '3') {
        return "rgba(167,38,8, 0.3)";
    } else if (priority === '2') {
        return "rgba(236,154,41, 0.3)";
    } else {
        return "rgba(84,140,47, 0.3)";
    }
}

function Task(props) {
    return <div>
        <div class="todo-task" id={props.id}>
            
            <Checkbox aria-label={!props.completed} priorityColor={priorityColor(props.priority)} completed={props.completed} onCompleted={() => props.onEdit(props.id, "completed", !props.completed)}/>
            
            <div class="todo-item" role="text" style={{backgroundColor: priorityColor(props.priority)}}>
                
                {/* Checks if a task needs to be crossed out if completed. */}
                {props.completed ? <p label="aksdaksdjaksjd" role="text" class="task-text" id="complete">{props.title}</p> : <p aria-label={props.title} role="text" class="task-text">{props.title}</p>}
                
                {/* Adds the dropdown box to edit and delete per task. */}
                <div class="todo-edit">
                <Dropdown class="dropdown-bar" priority={props.priority} id={props.id} title={props.title} onDeleteTask={() => props.onDeleteTask(props.id)} onEdit={props.onEdit}/>
                </div>

            </div>
        </div>
    </div>
}
export default Task;