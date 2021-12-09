import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Close from "@material-ui/icons/Close";
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import "./Tabs.css"
import TabModal from "./TabModal"
import ShareModal from "./ShareModal"

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs(props) {
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    props.handleTab(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{width: "100vw"}}>
        {/*New Tab Button*/}
      <div class="headerUI">
        {<TabModal id="tabModal" onNewTab={props.handleNewTab}/>}
        {props.tab != '0' && props.currentTab && props.user.uid === props.currentTab.owner && <ShareModal id="shareModal" handleShareTab={props.handleShareTab}/>}
        <div class="sharedWith">
          {props.tab != '0' && props.currentTab ? 
            <><p>Owner: {props.currentTab.sharedWith[0]}</p>
              {props.currentTab.sharedWith.length > 1 ? 
              <><p id="sharedText">Shared With: </p>{props.currentTab.sharedWith.slice(1, props.currentTab.sharedWith.length).map(email => <p>{email}</p>)}</> :
              <p id="sharedText">No Shared Users</p>}</> :

              <></>}

            </div>
          </div> 
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
          {props.tabs.map((tab) =>
            <Tab 

                icon={
                  <button class="tab-delete-button" aria-label={"delete " + tab.title} type="submit" onKeyPress={() => props.handleDeleteTab(tab.tabId)}>
                  <Close role="button" id={tab.tabId} onClick={() => props.handleDeleteTab(tab, tab.owner)}/>
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
            )}
        </Tabs>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}
