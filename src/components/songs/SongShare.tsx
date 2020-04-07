import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Popover, Button } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import { SongModel } from '../../data/Models';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

interface SongShareProps {
  song:  SongModel,
}

const SongShare:  React.FC<SongShareProps> = ({
  song,
}) => { 
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);
    const id = open ? 'song-share-popover' : undefined;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const makeURL = () => {
        return window.location + '?song=' + JSON.stringify(song)
    }

    return (
      <div>
        <Button aria-describedby={id} variant="contained" color="secondary" onClick={handleClick}>
            Share
            <ShareIcon />
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <FormControl variant="outlined" className={classes.formControl}>
          <div>
            <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
                Copy
            </Grid>
            <Grid item>
                <a href={makeURL()}>Link</a>
                <TextField id="input-with-icon-grid" value={makeURL()}  />
            </Grid>
            </Grid>
        </div>
          </FormControl>
        </Popover>
      </div>
    );
}


export default SongShare;