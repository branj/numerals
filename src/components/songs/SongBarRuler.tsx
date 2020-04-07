import React from 'react';

import { Box, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

interface SongBarRulerProps {
    xCoord : number,
    thumbClick : any
}

const useStyles = makeStyles((theme: Theme) => ({
    ruleLine : (positionProp: SongBarRulerProps) => ({
        height: theme.spacing(12),
        width: '0px',
        backgroundColor: 'none',
        borderRight: "dashed thin lightgray",
        left: positionProp.xCoord
    }),
    root: {
      transform: 'translateZ(0px)',
      flexGrow: 1,
      textAlign: 'center'
    },
    wrapper: {
      height: 0,
      width: 0
    },
    ruleDot: {
        height: 25,
        width: 25,
        position: 'relative',
        left: 0,
        bottom: 0,
        backgroundColor: 'lightgray',
        borderRadius : "25px",
        cursor: 'pointer'
    },
  }));

const SongBarRuler: React.FC<SongBarRulerProps>
= (props) => { 
  const classes = useStyles(props);

  return (
    <Box className={classes.wrapper}>   
        { (props.xCoord > 0) && 
            <Box style={{"position":"absolute"}} className={classes.ruleLine} >
                <IconButton onClick={props.thumbClick} style={{marginLeft: '-25%'}} color="primary" aria-label="add to shopping cart">
                  <AddIcon />
                </IconButton>
            </Box>
        }
    </Box>
  );
}
export default SongBarRuler;
