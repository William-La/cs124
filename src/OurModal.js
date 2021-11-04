import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import { useRef } from "react";

// Material UI JSS styles for the Modal component. 
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
  const [priority, setPriority] = useState('2');
  const inputTask = useRef(null);

  function handleChange(e) {
      setInput(e.target.value);
  }

  return (
    // Creates a Modal for inputting new values.
    <Modal
      open={props.open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h5" component="h2">
          {props.modalText}
        </Typography>
        <form onSubmit={() => {props.handleAction(input, priority); setInput(''); setPriority('2');}}> 
          <label>
          {/* Changes text depending on the actions (editing or deleting) */}
          <input id="inputText" 
                  type="text" 
                  maxlength = "30"
                  placeholder={props.placeholder} 
                  ref={inputTask} 
                  value={input}
                  onChange={handleChange}/>
          </label>
          
        {/* Priority implementation */}
        <Typography id="modal-modal-priority" variant="h5" component="h2">
            Please select a Priority
        </Typography>
          
          {/* Changes text depending on the actions (editing or deleting) */}
          <br/>
          <input id="priValueHigh" 
                  name="priority"
                  type="radio" 
                  value={'3'}
                  checked={priority === '3'}
                  onChange={ e => setPriority(e.currentTarget.value)
                  }/>

            <label for="priValueHigh">High</label><br></br>
            <input id="priValueMedium" 
                  name="priority"
                  type="radio" 
                  value={'2'}
                  checked={priority === '2'}
                  onChange={ e => setPriority(e.currentTarget.value)}/>

            <label for="priValueMedium">Medium</label><br></br>
            <input id="priValueLow"
                  name="priority" 
                  type="radio" 
                  value={'1'}
                  checked={priority === '1'}
                  onChange={ (e) => {e.preventDefault(); setPriority(e.currentTarget.value);}}
                  />
            <label for="priValueLow">Low</label><br></br>
          <br/>
          <input id="submitButton" type="submit" value="Submit" />
      </form>
    </Box>
  </Modal>
  );
}