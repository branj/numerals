import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {SCALE, BPM} from '../../data/Constants';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { SongConfig } from '../../data/Models';
import { ConfigHandler } from '../../utils/Handlers';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

interface SongConfigProps {
  songConfig:  SongConfig,
  songConfigHandler: any,
}

const SongConfigForm:  React.FC<SongConfigProps> = ({
  songConfig,
  songConfigHandler
}) => { 
    const classes = useStyles();
    const [songKey, setKey] = React.useState(1);
    const [songBpm, setBpm] = React.useState(2);  

    const handleKeyChange = (event:any) => {
      setKey(event.target.value);
      songConfig.key = event.target.value
      var handler = new ConfigHandler();
      handler.config = songConfig;
      songConfigHandler(handler);
    };

    const handleBpmChange = (event:any) => {
      setBpm(event.target.value);
      songConfig.bpm = event.target.value
      var handler = new ConfigHandler();
      handler.config = songConfig;
      songConfigHandler(handler);
    };
  
    return (
      <div>
          <FormControl variant="outlined" className={classes.formControl}>
            <TextField
                  key="song-config-key"
                  id="song-config-key"
                  select
                  placeholder="Key"
                  value={songKey}
                  onChange={handleKeyChange}
              >
                {SCALE.map((value, i) => { 
                  return (
                    <MenuItem key={value.key} value={value.key}>{value.label}</MenuItem>
                  ) 
                })}
              </TextField>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
              <TextField
                  id="song-config-bpm"
                  select
                  placeholder="BPM"
                  value={songBpm}
                  onChange={handleBpmChange}
              >
                {BPM.map((value, i) => { 
                  return (
                    <MenuItem key={value.key} value={value.key}>{value.label}</MenuItem>
                  ) 
                })}
              </TextField>
          </FormControl>
      </div>
    );
}


export default SongConfigForm;