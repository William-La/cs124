import React from "react";
import "./Header.css"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Tab from "./Tabs.js"

// JSS styles for our Dropdown.
const style = {
    paddingLeft: '15px',
    paddingTop: '191px',
    transform: 'scale(1.5)'
}


function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
  
  }

// function LabTabs(props) {

//   const handleChange = (event, newValue) => {
//     props.handleTab(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%', typography: 'body1' }}>
//       <TabContext value={props.tab}>
//         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//           <TabList onChange={handleChange} aria-label="lab API tabs example">
//             <Tab label="Item One" value={1}/>
//             <Tab label="Item Two" value={2} />
//             <Tab label="Item Three" value={3} />
//           </TabList>
//         </Box>
//         {/* <TabPanel value="1"> kjhjhjkh</TabPanel>
//         <TabPanel value="2">Item Two</TabPanel>
//         <TabPanel value="3">Item Three</TabPanel> */}
//       </TabContext>
//     </Box>
//   );
// }
function Header(props) {
   
    function DropDown(title, itemOne, itemTwo, itemThree, action) {

        return (
            <div class="dropdown" style={style}>
            <Box sx={{ minWidth: 120 }}>
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
            <Tab {...props}/>
            {/* <LabTabs {...props}/> */}
         </div>
    </div>
}
export default Header;