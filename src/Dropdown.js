import React from "react";
import "./Dropdown.css"
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import OurModal from "./OurModal"
import { useState } from "react"

// MaterialUI JSS to style the Menu.
const StyledMenu = styled((props) => (
        <Menu
          elevation={0}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          {...props}
        />
      ))(({ theme }) => ({

        // Material UI root themes for different incoperated components within the 
        // Menu iteself. 
        '& .MuiPaper-root': {
          borderRadius: 6,

          minWidth: 180,
          color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
          boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
          '& .MuiMenu-list': {
            padding: '4px 0',
          },
          '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
              fontSize: 18,
              color: theme.palette.text.secondary,
              marginRight: theme.spacing(1.5),
            },
            '&:active': {
              backgroundColor: alpha(
                theme.palette.primary.main,
                theme.palette.action.selectedOpacity,
              ),
            },
          },
        },
      }));
      
      export default function Dropdown(props) {
        const [modalOpen, setModalOpen] = useState(false);
        const handleModalOpen = () => setModalOpen(true);
        const handleModalClose = () => setModalOpen(false);
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        
        // Handles clicking on the dropdown arrow.
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        // Handles closing the dropdown arrow.
        const handleClose = () => {
          setAnchorEl(null);
        };
        // Allows us to edit the Modal.
        function handleEdit(input) {
          props.onEditTask(props.id, input);
          handleModalClose();
        }
      
        return (
          <div>
            {/* Creates a Menu that can open and close and supports a Modal/Deletion */}
            <Button
              id="demo-customized-button"
              aria-controls="demo-customized-menu"
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
              style={{
                    bottom: "90px",
                    left: "600px",
                    transform: "scale(1.5)",
                    background: "none",
                    color: "black"
                }}
            >  
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}

            >
              {/* Each action available for the Dropdown */}
              <MenuItem onClick={() => {handleModalOpen(); handleClose()}} disableRipple>
                <EditIcon />
                Edit
              </MenuItem>
              <MenuItem onClick={() => {props.onDeleteTask(); handleClose()}} disableRipple>
                <FileCopyIcon />
                Delete
              </MenuItem>
            </StyledMenu>
            {/* Creates a Modal component to edit a task. */}
            <OurModal open={modalOpen}
              onClose={handleModalClose}
              placeholder={props.title}
              modalText={"Please edit task"}
              handleAction={handleEdit}
            />
          </div>
        );
      }

