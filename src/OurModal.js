import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import { useRef } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'scale(1.4)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  marginLeft: '-215px'

};


export default function OurModal(props) {
  const [input, setInput] = useState(''); 
  const inputTask = useRef(null);
  function handleChange(e) {
      setInput(e.target.value);
  }
    return (
      <Modal
      open={props.open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            {props.modalText}
          </Typography>
          <form onSubmit={() => {props.handleAction(input); setInput('');}}> 
          <label>

          <input id="inputText" 
                  type="text" 
                  maxlength = "30"
                  placeholder={props.placeholder} 
                  ref={inputTask} 
                  value={input} 
                  onChange={handleChange}/>
          
          </label>
        <input id="submitButton" type="submit" value="Submit" />

        </form>

        </Box>
    </Modal>
    );
}