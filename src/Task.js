import React from "react"
import "./Task.css"
import Checkbox from "./Checkbox"


function Task(props) {
    return <div>
        <div class="todo-task" id={props.a.id}>
            <Checkbox completed={props.a.completed}/>
            <div class="todo-item">
                <p class="task-text">{props.a.title}</p>
            </div>
        </div>
    </div>

}

export default Task;