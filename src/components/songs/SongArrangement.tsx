import React from 'react';
import { SongArrangementModel, SongConfig, SongBarModel } from '../../data/Models';
import { makeStyles, Theme, createStyles, Card, CardContent, Typography, CardActions } from '@material-ui/core';
import SongBar from './SongBar';
import SongArrangementActionList from './SongArrangementActionList';

export interface ArrangementProps {
    arrangement : SongArrangementModel,
    songHandler : any,
    arrangementIndex : number,
    config : SongConfig
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        minWidth: 275,
        width: '100%',
        overflow:'visible'
    },
    title: {
        fontSize: 14,
    }
  }),
);

const SongArrangement: React.FC<ArrangementProps> = ({
  arrangement,
  songHandler,
  arrangementIndex,
  config
}) => {
    const classes = useStyles();
    function renderBar(songBar: SongBarModel, barIndex: number) {
        return <SongBar key={"song-bar-" + barIndex + songBar.uuid}  config={config} bar={songBar} barIndex={barIndex} songHandler={songHandler}/>
    }

    const rows = []
    for (let i = 0; i < arrangement.bars.length; i += 1) {    
        rows.push(renderBar(arrangement.bars[i], i))
    }
    return <Card variant="outlined" className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" >
                        {arrangement.label}
                    </Typography>
                    {rows}
                </CardContent>
                <CardActions disableSpacing>
                    <SongArrangementActionList arrangementIndex={arrangementIndex} configHandler={songHandler} />
                </CardActions>
            </Card>
  
}

export default SongArrangement;