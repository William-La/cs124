import React from "react";
import "./Checkbox.css"
import CheckIcon from '@mui/icons-material/Check';

function checkComplete(completed) {
    if (completed) {
        return "uncomplete task"
    } else {
        return "complete task"
    }

}

function Checkbox(props) {
    return <div>
        
        {/* Renders a checkmark if the task is completed or not. */}
        <button aria-pressed={props.completed} aria-label={checkComplete(props.completed)} role="button" class="todo-checkbox"  onClick={props.onCompleted} style={{backgroundColor: props.priorityColor}}>
            

            {props.completed ? <div class="completed"> <CheckIcon id="CheckIcon"/></div> : <div class="uncompleted"></div>}
        </button>
        

    </div>

}

export default Checkbox;