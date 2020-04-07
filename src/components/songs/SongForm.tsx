import React from 'react';
import SongGrid from './SongGrid';
import SongTitle from './SongTitle';
import SongConfigForm from './SongConfigForm';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { SongModel, SongEditHistory } from '../../data/Models';
import { SongHandler } from '../../utils/Handlers';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import BackIcon from '@material-ui/icons/Undo';
import ForwardIcon from '@material-ui/icons/Redo';
import { AppBar, createStyles, makeStyles, Theme,Snackbar } from '@material-ui/core';
import { SongRepository } from '../../data/SongRepository';
import AddNewSongSectionMenu from './AddNewSongSectionMenu';
import ViewTogglerSwitch from './ViewTogglerSwitch';

export interface SongProps {
  song: SongModel
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolBar: {
      boxShadow: "none",
      borderBottom: "solid thin " + theme.palette.primary.main
    },
    smallToolbarItem: {
      marginRight: theme.spacing(1),
      fontSize : 'large',
    },
  }),
);

const SongForm: React.FC<SongProps> = ({
  song: songModel,
}) => {

  const classes = useStyles();
  const [song, setSong] = React.useState<SongModel>(songModel)
  //const [songHistory, setSongHistory] = React.useState<SongEditHistory[]>(SongRepository.getHistory(song.uuid))
  const [open, setOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');

  React.useEffect(() => {
    localStorage.setItem('song', JSON.stringify(song));
    //console.log(SongRepository.getHistory(song.uuid))
  }, [song]);

  
  /*React.useEffect(() => {
    console.log('updated song history')
  }, [songHistory]);*/
  

  const handleSongChange = (handler:SongHandler) => {
    console.log("Song Change Fired", handler.title, handler.description)
    //Make history item of what it was before this was ran. 
    
    handler.handle(song)
    setSong({ ...song })
    //setSongHistory({...SongRepository.setHistory(song, handler)})
    setSnackbarMessage(handler.title)
    setOpen(true);
  };

  /*
  const handleClickSave = () =>  {
    var songs = localStorage.getItem('songs');
    var songString = songs ? songs : '[]';
    var parsedSongs = JSON.parse(songString)
    parsedSongs.push(song)
    localStorage.setItem('songs', JSON.stringify(parsedSongs));
  }*/

  const handleSnackBarClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <>
      <AppBar className={classes.toolBar} position='sticky' color="inherit">
        <Toolbar disableGutters={true} variant="dense">
          <div>
            <IconButton className={classes.smallToolbarItem}>
              <BackIcon fontSize="small" />
            </IconButton>
            <IconButton className={classes.smallToolbarItem}>
              <ForwardIcon fontSize="small" />
            </IconButton>
          </div>

            <Divider orientation="vertical" />

            <SongConfigForm songConfigHandler={handleSongChange} songConfig={song.config} />

            <Divider orientation="vertical" />
            
            <ViewTogglerSwitch />

            <Divider orientation="vertical" />

        </Toolbar>
        <Divider />
        <Toolbar disableGutters={true} variant="dense">
          <SongTitle title={song.title} titleHandler={handleSongChange} />
        </Toolbar>

      </AppBar>

      <Paper>
          <SongGrid song={song} songChangeHandler={handleSongChange} />
      </Paper>
      
      <AddNewSongSectionMenu eventHandler={handleSongChange} />

      <Snackbar 
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleSnackBarClose}
        message={snackbarMessage}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleSnackBarClose}>
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleSnackBarClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />

    </>
  );
}

export default SongForm;