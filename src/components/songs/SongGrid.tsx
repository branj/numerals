import React from 'react'
import {SongModel, SongArrangementModel} from '../../data/Models';
import SongArrangement from './SongArrangement';

export interface GridProps {
    song: SongModel,
    songChangeHandler: any
}

/** Styling properties applied to the board element */
const boardStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
}

/**
 * The chessboard component
 * @param props The react props
 */
const SongGrid: React.FC<GridProps> = ({
    song: songModel,
    songChangeHandler : numeralHandler
}) => {
    
    const [songState, setSong] = React.useState<SongModel>(songModel)
    React.useEffect(() => { setSong(songModel) }, [songModel]);    
    function renderArrangement(songArrangement: SongArrangementModel, arrangementIndex: number) {
        return <SongArrangement key={"song-arrangement-" + arrangementIndex}  config={songModel.config} arrangement={songArrangement} arrangementIndex={arrangementIndex} songHandler={numeralHandler}/>
    }

    
    const rows = []
    for (let i = 0; i < songState.arrangements.length; i += 1) {
        rows.push(renderArrangement(songState.arrangements[i], i))
     }
return <div style={boardStyle}>{rows}</div>
  
}
export default SongGrid;
