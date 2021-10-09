import React from "react"
import "./Task.css"
import Checkbox from "./Checkbox"


function Task(props) {
    return <div>
        <div class="todo-task" id={props.a}>
            <Checkbox completed={props.a.completed} onCompleted={() => props.onCompleted(props.a.id)}/>
            <div class="todo-item">
                {props.a.completed ? <p class="task-text" id="complete">{props.a.title}</p> : <p class="task-text">{props.a.title}</p>}
            </div>
        </div>
    </div>

}

export default Task;