import React from "react";
import "./Checkbox.css"
import CheckIcon from '@mui/icons-material/Check';
function Checkbox(props) {
    return <div>
        <div class="todo-checkbox" onClick={props.onCompleted}>
            {props.completed ? <div class="completed"> <CheckIcon style={{width: "100px", height: "100px"}}/></div> : <div class="uncompleted"></div>}
        </div>

    </div>

}

export default Checkbox;