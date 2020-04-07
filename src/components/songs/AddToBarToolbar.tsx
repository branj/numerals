import React from 'react';
import { makeStyles, Theme, createStyles, Box, IconButton} from '@material-ui/core';

export interface AddToSongBarProps {
    items : any,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolBar: {
      boxShadow: "none",
      border: "solid thin " + theme.palette.primary.light,
      padding: theme.spacing(0),
      marginBottom: theme.spacing(1),
      width: '66px',
      textAlign: 'center',
    },
    toolBarAction : {
        margin: theme.spacing(1),
    }
  }),
);

const AddToSongBar: React.FC<AddToSongBarProps> = ({
  items
}) => {
    
  const classes = useStyles();

  function renderAddTo(item:any, key:number) {
    return  <Box key={key} className={classes.toolBarAction}>
                <IconButton>
                    {item.icon}
                </IconButton>
            </Box>
}

  var rows = [];
  for (var i = 0; i < items.length; i++) {
    rows.push(renderAddTo(items[i], i))
  }

  return (
    
    <Box className={classes.toolBar} component="div">
        <h4>ADD</h4>
        {rows}
     </Box>
  );
}

export default AddToSongBar;