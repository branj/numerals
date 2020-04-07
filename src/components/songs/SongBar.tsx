import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import BarNumeralSelect from './BarNumeralSelect';
import SongBarNumeralSlider from './SongBarNumeralSlider';
import { SongBarModel, BeatModel, SongConfig } from '../../data/Models';
import SongBarEdit from './SongBarEdit';
import { BarLyricHandler } from '../../utils/Handlers';
import DragIcon from '@material-ui/icons/DragIndicator';
import { makeStyles, Theme, createStyles, Divider} from '@material-ui/core';


export interface BarProps {
    bar : SongBarModel,
    songHandler : any,
    barIndex : number,
    config : SongConfig
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    barBox: {
      boxShadow: "none",
      //border: "dotted thin " + theme.palette.primary.light,
      padding: theme.spacing(0),
      marginBottom: theme.spacing(1),
      width: '100%'
    },
  }),
);

const SongBar: React.FC<BarProps> = ({
  bar,
  songHandler,
  barIndex,
  config
}) => {
  const classes = useStyles();
  const [clickedLyric, setClickedLyric] = React.useState(false)
  const [tmpLyric, setTmpLyric] = React.useState('')
  const [submitUpdate, setSubmitUpdate] = React.useState(false)

  const handleLyricUpdate = (event:any) => {
    
    if(!submitUpdate){ return  }

    var handler = new BarLyricHandler()
    handler.lyric = tmpLyric
    handler.barIndex = barIndex

    songHandler(handler);
    setClickedLyric( ! clickedLyric )
    setSubmitUpdate(false)
  }

  const handleLyricEdit = (event:any) => {
    setSubmitUpdate(true)
    setTmpLyric(event.target.value)
  }

  function renderBarColumn(beat: BeatModel, barIndex: number, beatIndex: number) {
    return <Grid key={"griditem-" + barIndex + "-" + beatIndex} item xs={3} >
              <BarNumeralSelect key={"select-" + barIndex + "-" + beatIndex} config={config} numeralHandler={songHandler} numeral={(beat.numeral) ? beat.numeral: undefined} barIndex={barIndex} beatIndex={beatIndex} />
           </Grid>
  }

  const renderDivider = () => {
    return <Divider variant="middle" />
  }

  var rows = [];
  for (var i = 0; i < config.bpm; i++) {
    rows.push(renderBarColumn(bar.beats[i], barIndex, i))
  }

  return (
    
    <Grid 
      className={classes.barBox}
      container 
      spacing={0} 
      alignItems="center"
    >
        <Grid item xs={1}>
          <DragIcon fontSize="small" color="disabled"/>
        </Grid>
        <Grid item xs={10}>
          <Grid container spacing={0}>
            <SongBarNumeralSlider barIndex={barIndex} songBar={bar} numeralHandler={songHandler} />
          </Grid>
          <Grid container spacing={0} alignItems="center">
                  <TextField 
                  key={"numeral-bar-id-" + barIndex}
                  fullWidth
                  variant="standard"
                  defaultValue={bar.lyrics ? bar.lyrics : ''}
                  onChange={handleLyricEdit}
                  onMouseLeave={handleLyricUpdate}
                  />
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <SongBarEdit configHandler={songHandler} barIndex={barIndex} />
        </Grid>
        {renderDivider()}
    </Grid>
  );
}

export default SongBar;