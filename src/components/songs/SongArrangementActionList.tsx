import React from 'react';
import { BarRemoveHandler, BarDuplicateHandler, BarMoveHandler } from '../../utils/Handlers';
import {Button, Menu, MenuItem, makeStyles, Theme, createStyles } from '@material-ui/core';

interface BarEditProps {
    arrangementIndex : number,
    configHandler : any
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
  }),
);

const SongArrangementActionList: React.FC<BarEditProps> = ({
    arrangementIndex,
    configHandler
  }) =>  {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    setAnchorEl(null);
    var handler = new BarRemoveHandler();
    handler.barIndex = arrangementIndex;
    configHandler(handler)
  };

  const handleDuplicate = () => {
    setAnchorEl(null);
    var handler = new BarDuplicateHandler();
    handler.barIndex = arrangementIndex;
    configHandler(handler)
  };

  
  const handleUp = () => {
    setAnchorEl(null);
    var handler = new BarMoveHandler();
    handler.up = true;
    handler.barIndex = arrangementIndex;
    configHandler(handler)
  };

  const handleDown= () => {
    setAnchorEl(null);
    var handler = new BarMoveHandler();
    handler.up = false;
    handler.barIndex = arrangementIndex;
    configHandler(handler)
  };

  const handleToTop = () => {
    setAnchorEl(null);
    var handler = new BarMoveHandler();
    handler.up = true;
    handler.allTheWay = true;
    handler.barIndex = arrangementIndex;
    configHandler(handler)
  };

  const handleToBottom= () => {
    setAnchorEl(null);
    var handler = new BarMoveHandler();
    handler.up = false;
    handler.allTheWay = true;
    handler.barIndex = arrangementIndex;
    configHandler(handler)
  };

  return (
    <div className={classes.root}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Edit
      </Button>
      <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
      >
          <MenuItem onClick={handleDuplicate}>Duplicate</MenuItem>
          <MenuItem onClick={handleDelete}>Delete</MenuItem>
          <MenuItem >Lock/Unlock</MenuItem>
          <MenuItem >Inspiration</MenuItem>
          <MenuItem onClick={handleUp}>Move Up</MenuItem>
          <MenuItem onClick={handleDown}>Move Down</MenuItem>
          <MenuItem onClick={handleToTop}>Move To Top</MenuItem>
          <MenuItem onClick={handleToBottom} >Move To Bottom</MenuItem>
      </Menu>
    </div>
  );
}

export default SongArrangementActionList;
