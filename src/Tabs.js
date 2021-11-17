import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import "./Tabs.css"



// const useStyles = makeStyles({
//     root: {
//       backgroundColor: 'red',
//       color: (props) => props.color,
//     },
//   });

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={props.tab !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {props.tab === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

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

  const handleChangeIndex = (index) => {
    props.handleTab(index);
  };

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{width: "100%" }}>
      <AppBar position="static">
        <Tabs
          value={props.tab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons="auto"
          TabIndicatorProps={{style: {background:'black'}}}
           aria-label="full width tabs example"
        >
          <Tab label="School" {...a11yProps(0)} />
          <Tab label="Chores" {...a11yProps(1)} />
          <Tab label="Random" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
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
      </SwipeableViews>
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
