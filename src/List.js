import React from "react";
import Task from "./Task";
import "./List.css";


function List(props) {
    return <div>
        <div class="todo-body">
            {props.list.map(a => <Task a={a}/>)}
         </div>
    </div>

}

export default List;