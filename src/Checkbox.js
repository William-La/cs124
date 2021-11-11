import React from "react";
import "./Checkbox.css"
import CheckIcon from '@mui/icons-material/Check';

function Checkbox(props) {
    return <div>
        
        {/* Renders a checkmark if the task is completed or not. */}
        <div role="button" class="todo-checkbox" aria-pressed={props.completed}  onClick={props.onCompleted} style={{backgroundColor: props.priorityColor}}>
            

            {props.completed ? <div class="completed"> <CheckIcon style={{width: "100px", height: "100px"}}/></div> : <div class="uncompleted"></div>}
        </div>
        

    </div>

}

export default Checkbox;