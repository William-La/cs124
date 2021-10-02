import React from "react";
import "./Checkbox.css"

function Checkbox(props) {
    return <div>
        <div class="todo-checkbox">
            {/* {console.log(props.completed)} */}
            {props.completed ? <div class="completed"></div> : <div class="uncompleted"></div>}
        </div>

    </div>

}

export default Checkbox;