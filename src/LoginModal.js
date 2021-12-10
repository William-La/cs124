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
    const [email, setEmail] = useState("");
    const emailTask = useRef(null);
    const [password, setPassword] = useState("");
    const passTask = useRef(null);

    function handleSubmit() {
        props.login(email, password);
        setEmail('');
        setPassword('');
        handleClose();
    }
  
    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    return (
        <div>
            <Button aria-label="Sign Up" onClick={handleOpen}
                    style={{color:"black"}}
            >{props.text}</Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                {props.text}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Email: 
                </Typography>
                <form onSubmit={handleSubmit}>
                {/* Changes text depending on the actions (editing or deleting) */}
                <input id="emailText" 
                        type="text"
                        placeholder={props.placeholder} 
                        ref={emailTask} 
                        value={email}
                        onChange={handleEmailChange}/> <br />
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Password: 
                </Typography>
                <input id="passwordText" 
                        type="password"
                        placeholder={props.placeholder} 
                        ref={passTask} 
                        value={password}
                        onChange={handlePasswordChange}/> <br />
                <input id="submitButton" type="submit" value={props.buttonText} />
                <input type="button" id="closeButton" onClick={handleClose} value="Cancel" />
                </form>
            </Box>
            </Modal>
        </div>
        );
    }
