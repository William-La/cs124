import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState, useRef } from 'react';

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

export default function BasicModal(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [input, setInput] = useState("");
    const inputTask = useRef(null);

    function handleSubmit() {
        props.handleShareTab(input);
        setInput('');
        handleClose();
    }
  
    function handleChange(e) {
        setInput(e.target.value);
    }

    return (
        <div>
            <Button aria-label="Share list" onClick={handleOpen}
                    style={{color:"black"}}
            >Share List</Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                Share List
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Please provide an email to share with:
                </Typography>
                <form onSubmit={handleSubmit}>
                {/* Changes text depending on the actions (editing or deleting) */}
                <input id="tabInputText" 
                        type="text"
                        placeholder={props.placeholder} 
                        ref={inputTask} 
                        value={input}
                        onChange={handleChange}/> <br />
                <input id="submitButton" type="submit" value={"Share List"} />
                <input type="button" id="closeButton" onClick={handleClose} value="Cancel" />
                </form>
            </Box>
            </Modal>
        </div>
        );
    }
