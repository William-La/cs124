import React from "react";
import "./Header.css"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';


const style = {
    paddingLeft: '155px',
    paddingTop: '191px',
    transform: 'scale(1.5)'
}


function Header(props) {
    function DropDown() {
        return (
            <div class="dropdown" style={style}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  View
                </InputLabel>
                <NativeSelect
                onChange={(e) => props.view(e.target.value)}
                  defaultValue={0}
                  inputProps={{
                    type: 'view',
                    id: 'uncontrolled-native',
                  }}
                >
                  <option value="all">All</option>
                  <option value="completed">Completed</option>
                  <option value="uncompleted">Uncompleted</option>
                </NativeSelect>
              </FormControl>
            </Box>
            </div>
          );
        }
    return <div>
        <div class="header">
            <h1 id="title">To do</h1>
            {DropDown()}
         </div>
    </div>
}

export default Header;