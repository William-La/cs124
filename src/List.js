import React from "react";
import Task from "./Task";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./List.css";
import { useState } from "react";
import { useRef } from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  


function List(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [input, setInput] = useState(''); 
    const inputTask = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        props.onNewTask(input);
        handleClose();
    }

    function handleChange(e) {
        setInput(e.target.value);
    }
    
    return <div>
        <div class="todo-body">
            {props.filteredTodos ? 
            props.filteredTodos.map(a => <Task a={a} onCompleted={props.onCompleted}/>) :
            props.list.map(a => <Task a={a} onCompleted={props.onCompleted}/>)}
            <AddCircleIcon style={{fontSize:"150px",
                                    gridColumn: "1/ span 1",
                                    gridRow: "9/ span 1",
                                    marginLeft: "750px",
                                    }} 
            
            onClick={handleOpen}/>
            <div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Please enter a new task
          </Typography>
          <form onSubmit={handleSubmit}> 
          <label>
          <input type="text" placeholder="Enter a new task" ref={inputTask} value={input} onChange={handleChange} />
          
          </label>
         <input type="submit" value="Submit" />

        </form>

        </Box>
      </Modal>
    </div>
         </div>
    </div>

}

export default List;