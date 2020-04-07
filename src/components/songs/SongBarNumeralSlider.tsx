import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { SongBarModel, BeatModel } from '../../data/Models';
import { BeatHandler } from '../../utils/Handlers';
import { Box, Badge, withStyles } from '@material-ui/core';
import {NumeralRenderer} from '../../utils/Renderers';
import Draggable from 'react-draggable';
import SongBarRuler from './SongBarRuler';

const useStyles = makeStyles((theme: Theme) =>
  createStyles(
    {
      wrapper : {
        paddingTop: theme.spacing(0),
        paddingBottom: theme.spacing(),
        width: '100%',
      },
      root: {
        height: theme.spacing(2.5),
        width: '100%',
        margin: theme.spacing(1),
      },
      rulerRoot: {
        backgroundColor: theme.palette.grey[400],
        //height: theme.spacing(1),
        paddingTop: theme.spacing(1.5),
        paddingBottom: theme.spacing(1.5),
        width: '100%',
        margin: theme.spacing(0),
        cursor: 'pointer'
      },
      thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus,&:hover,&$active': {
          boxShadow: 'inherit',
        },
      },
      shape: {
        //backgroundColor: theme.palette.primary.main,
        width: 20,
        height: 20,
        fontSize: '20px'
      },
      badge: {
        marginTop : theme.spacing(1)
      },
      active: {},
      valueLabel: {
        left: 'calc(-50% + 4px)',
      },
      track: {
        height: 3,
        borderRadius: 4,
      },
      rail: {
        height: 8,
        borderRadius: 4,
      }
    }
  ),
);

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      background: "none",
      border : 'solid thin',
      padding: '1px',
      fontSize : '8px'
    },
  }),
)(Badge);

interface NumeralSliderProps {
  songBar : SongBarModel,
  barIndex: number,
  numeralHandler: any
}

const SongBarNumeralSlider: React.FC<NumeralSliderProps> = ({
  songBar,
  barIndex,
  numeralHandler
}) => {
  
  const classes = useStyles();
  const GRID_SNAP = 50;
  const [rulerPosition, setRulerPosition] = React.useState(0)

  function renderBadge(beat: BeatModel, beatIndex: number) {
    return (
      <Draggable
          key={"draggable-bar-index-" + barIndex + "-beat-" + beatIndex}
          axis="x"
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          position={undefined}
          grid={[GRID_SNAP, GRID_SNAP]}
          scale={1}
          >
            <StyledBadge 
              color="secondary" 
              overlap="circle"
              className={classes.badge} 
              key={"numeral-" + barIndex + "-bar-"+ beatIndex} 
              badgeContent={beat.numeral?.getValue()}> 
              <div className={classes.shape}>{NumeralRenderer.print(beat.numeral)}</div>
           </StyledBadge>
        </Draggable>   
    )
  }


  const showRuler = (data:any) => {
    setRulerPosition(data.clientX)
  }

  const hideRuler = (data:any) => {
    setRulerPosition(0)
  }

  var badges = [];
  for (var i = 0; i < songBar.beats.length; i++) {
    badges.push(renderBadge(songBar.beats[i], i))
  }

  const addNumeralBadge = (event: any) => {
    var handler = new BeatHandler();
    handler.barIndex = barIndex
    numeralHandler(handler)
  };

  return (
    <Box className={classes.wrapper} onMouseLeave={hideRuler}>
      <SongBarRuler xCoord={rulerPosition} thumbClick={addNumeralBadge} />
      <Box onClick={showRuler}  className={classes.rulerRoot}>
      </Box>
      <Box className={classes.root}>
          {badges}
      </Box>
    </Box>
  );
}


export default SongBarNumeralSlider;

