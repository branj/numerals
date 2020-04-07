import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import FourBarIcon from '@material-ui/icons/Filter4';
import TwoBarIcon from '@material-ui/icons/Filter2';
import OneBarIcon from '@material-ui/icons/Filter1';
import AddIcon from '@material-ui/icons/Add';
import { BarAddHandler } from '../../utils/Handlers';
import { Menu, MenuItem, ListItemIcon, Typography, Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    transform: 'translateZ(0px)',
    flexGrow: 1,
    textAlign: 'center'
  },
  exampleWrapper: {
    position: 'relative',
    marginTop: theme.spacing(-1.5),
    height: 79,
  },
}));

const actions = [
  { icon: <OneBarIcon />, name: 'Verse', value: 0 },
  { icon: <TwoBarIcon />, name: 'Chourus', value: 1 },
  { icon: <FourBarIcon />, name: 'Bridge', value: 2 },
  /*{ icon: <OneBarIcon />, name: '1 Bar', value: 1 },
  { icon: <TwoBarIcon />, name: '2 Bars', value: 2 },
  { icon: <FourBarIcon />, name: '4 Bars', value: 4 },*/
];

export interface AddSongSectionProps {
  eventHandler : any
}

const AddNewSongSectionMenu : React.FC<AddSongSectionProps> = ({
  eventHandler
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClose = () => {
    setAnchorEl(null);   
    setOpen(false);
  };

  const handleOpen = (event:React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget); 
    setOpen(true);
  };

  const handleClick = (barNum:number, event:React.MouseEvent<HTMLElement>) => {
    handleClose()
    
    var handler = new BarAddHandler();
    handler.barNum = barNum;
    handler.label = actions[barNum].name;
    eventHandler(handler);
  };

  return (
    <div className={classes.root}>
      <div className={classes.exampleWrapper}>
        <Button variant="contained" color="secondary"  onClick={handleOpen}>
          <AddIcon />
        </Button>
        <Menu
        id="simple-menu"
        keepMounted
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        >
            {actions.map(action => (
            <MenuItem
              key={action.name}
      
              onClick={(e)=>{handleClick(action.value, e)}}>
                    <ListItemIcon>
                        {action.icon}
                    </ListItemIcon>
                    <Typography variant="inherit">{action.name}</Typography>
              </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
}

export default AddNewSongSectionMenu;