import React from "react";
import "./Header.css"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Tabs from "./Tabs.js"

// JSS styles for our Dropdown.
const style = ({
  root: {
    // paddingLeft: '15px',
    paddingTop: '170px',
    transform: 'scale(1.5)'
  }
});


function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
  
  }


function Header(props) {
   
    function DropDown(title, itemOne, itemTwo, itemThree, action) {

        return (
            <div class="dropdown" style={style.root}>
            <Box sx={{ minWidth: 120}}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  {title}
                </InputLabel>
                <NativeSelect
                onChange={(e) => action(e.target.value)}
                  defaultValue={0}
                  inputProps={{
                    type: 'view',
                    id: 'uncontrolled-native',
                  }}
                >
                  {/* Different options for our menu. */}
                  <option value={itemOne}>{capitalize(itemOne)}</option>
                  <option value={itemTwo}>{capitalize(itemTwo)}</option>
                  <option value={itemThree}>{capitalize(itemThree)}</option>
                </NativeSelect>
              </FormControl>
            </Box>
            </div>
          );
        }
  
    return <div>
        <div class="header">
          <div role="group" class="title" aria-label="To Do">
            <h1 id="title">To do</h1>
          </div>
            <div class="view">{DropDown("View", "all", "completed", "uncompleted", props.view)}</div>
            <div class="sort">{DropDown("Sort", "date", "title", "priority", props.sort)}</div>
            <Tabs {...props}/>
            {/* <LabTabs {...props}/> */}
         </div>
    </div>
}
export default Header;