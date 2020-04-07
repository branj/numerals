import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreIcon from '@material-ui/icons/MoreVert';
import { BarRemoveHandler, BarDuplicateHandler, BarMoveHandler } from '../../utils/Handlers';
import IconButton from '@material-ui/core/IconButton';

export interface BarEditProps {
    barIndex : number,
    configHandler : any
}

const SongBarEdit: React.FC<BarEditProps> = ({
    barIndex,
    configHandler
  }) =>  {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDelete = () => {
    setAnchorEl(null);
    var handler = new BarRemoveHandler();
    handler.barIndex = barIndex;
    configHandler(handler)
  };

  const handleDuplicate = () => {
    setAnchorEl(null);
    var handler = new BarDuplicateHandler();
    handler.barIndex = barIndex;
    configHandler(handler)
  };

  const handleUp = () => {
    setAnchorEl(null);
    var handler = new BarMoveHandler();
    handler.up = true;
    handler.barIndex = barIndex;
    configHandler(handler)
  };

  const handleDown= () => {
    setAnchorEl(null);
    var handler = new BarMoveHandler();
    handler.up = false;
    handler.barIndex = barIndex;
    configHandler(handler)
  };

  const handleToTop = () => {
    setAnchorEl(null);
    var handler = new BarMoveHandler();
    handler.up = true;
    handler.allTheWay = true;
    handler.barIndex = barIndex;
    configHandler(handler)
  };

  const handleToBottom= () => {
    setAnchorEl(null);
    var handler = new BarMoveHandler();
    handler.up = false;
    handler.allTheWay = true;
    handler.barIndex = barIndex;
    configHandler(handler)
  };

  return (
    <>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color="secondary" aria-label="add an alarm">
        <MoreIcon fontSize="large" />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
      >
        <MenuItem onClick={handleDelete}>
            Delete
        </MenuItem>
        <MenuItem onClick={handleDuplicate}>
            Duplicate
        </MenuItem>
        <MenuItem onClick={handleUp}>Move Up</MenuItem>
        <MenuItem onClick={handleDown}>Move Down</MenuItem>
        <MenuItem onClick={handleToTop}>Move To Top</MenuItem>
        <MenuItem onClick={handleToBottom}>Move To Bottom</MenuItem>
      </Menu>
    </>
  );
}

export default SongBarEdit;
