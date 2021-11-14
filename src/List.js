import React from "react";
import Task from "./Task";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import OurModal from "./OurModal"
import "./List.css";
import { useState } from "react";
import { IconButton } from "@mui/material";


function List(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function handleSubmit(input, priority) {
      props.onNewTask(input, priority);
      handleClose();
  }
    
    return <div>
        <div  class="todo-body">
            {props.list.map(a => <Task {...a} key={a.id} onEdit={props.onEdit} onDeleteTask={props.onDeleteTask}/>)}
            {/* Different values have different actions for our circle button at the bottom. */}

            {props.view === "completed" ?
            <IconButton aria-label="delete">
            <RemoveCircleIcon style={{fontSize:"150px",
                                        gridColumn: "1/ span 1",
                                        gridRow: "9/ span 1",
                                        marginLeft: "750px",
                                        }} 
                              onClick={() => props.onDeleteAll(props.list)}/></IconButton>:
           <IconButton setKeyboardFocus="true" size="large" disableRipple= "true" aria-label="add">
           <AddCircleIcon 
  
                           style={{fontSize:"150px",
                                    gridColumn: "1/ span 1",
                                    gridRow: "9/ span 1",
                                    marginLeft: "750px",
                                    }} 
                           onClick={handleOpen}/>
          </IconButton>}
         </div>

            <div>
              {/* Creates a Modal to add a new task. */}
              <OurModal 
                open={open}
                placeholder={"Enter a new task"}
                modalText={"Please enter a new task"}
                submitText={"Create Task"}
                handleAction={handleSubmit}
                title=''
                priority='2'
                newItem={true}
              />
      </div>
    </div>
  // </div>

}

export default List;