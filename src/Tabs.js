import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Close from "@material-ui/icons/Close";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import "./Tabs.css"
import TabModal from "./TabModal"

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs(props) {
  const theme = useTheme();
//   const classes = useStyles(props);


  const handleChange = (event, newValue) => {
    props.handleTab(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{width: "100vw"}}>
        {/*New Tab Button*/}
      {<TabModal id="tabModal" onNewTab={props.handleNewTab}/>}
      <AppBar position="static">
        <Tabs
          value={props.tab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons="auto"
          TabIndicatorProps={{style: {background:'black'}}}
           aria-label="Select List"
        >
          {props.tabs.map((tab) => tab.tabId === "0" ? 
          
            <Tab aria-label={tab.title}
                role="button"
                label={tab.title}
                id={`full-width-tab-`+tab.tabId}
                aria-controls={`full-width-tabpanel-`+tab.tabId}
                value={tab.tabId}/> :
            // <button class="tab-button" aria-label={tab.title} type="submit" onKeyPress={handleChange} onClick={handleChange}>
            <Tab 

                icon={
                  <button class="tab-delete-button" aria-label={"delete " + tab.title} type="submit" onKeyPress={() => props.handleDeleteTab(tab.tabId)}>
                  <Close role="button" id={tab.tabId} onClick={() => props.handleDeleteTab(tab.tabId)}/>
                  </button>
                }
                aria-label={tab.title}
                role="button"
                iconPosition="start"
                label={tab.title}
                id={`full-width-tab-`+tab.tabId}
                aria-controls={`tab-`+tab.tabId}
                value={tab.tabId}
                />
            // </button>
            )}
          {/* <Tab label="School" {...a11yProps(0)} />
          <Tab label="Chores" {...a11yProps(1)} />
          <Tab label="Random" {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>
      {/* <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={props.tab}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={props.tab} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={props.tab} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={props.tab} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews> */}
    </Box>
    </ThemeProvider>
  );
}


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';

// export default function CenteredTabs(props) {

//     // const style = useStyles({
//     //     root: {
//     //       backgroundColor: 'orange',
//     //     },
//     //     selected: {
//     //       backgroundColor: 'purple',
//     //     },
//     // });

//   const handleChange = (event, newValue) => {
//     props.handleTab(newValue);
//   };

//   return (
//     // <Box style={style} sx={{ width: '100%', bgcolor: '#AF92C8', fontSize: "30px"}}>
//     <Box  sx={{bgcolor: '#AF92C8', transform: 'scale(1.5)', marginLeft: '40%', marginBottom: '2%'}}>

//       <Tabs 
//       selectionFollowsFocus="true"
//     //   tabItemContainerStyle={{width: '400px'}}
//       textColor="black" indicatorColor="none" value={props.tab} onChange={handleChange} centered>
//         <Tab label="List One" />
//         <Tab label="List Two" />
//         <Tab label="List Three" />
//       </Tabs>
//     </Box>
//   );
// }
