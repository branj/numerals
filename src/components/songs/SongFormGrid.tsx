import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddToBarToolbar from './AddToBarToolbar';
import { SONG_TOOLBAR_ITEMS } from '../../data/Constants';
import SongContainer from './SongContainer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default function SongFormGrid() {
  const classes = useStyles();
  var toolbarItems = SONG_TOOLBAR_ITEMS
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <AddToBarToolbar items={toolbarItems} />
        </Grid>
        <Grid item xs={8}>
          <SongContainer />
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
