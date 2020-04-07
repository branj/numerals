import * as m from './Models';

import BarIcon from '@material-ui/icons/Menu'
import LyricIcon from '@material-ui/icons/TextFields'
import ChordIcon from '@material-ui/icons/MusicNote'
import StrumIcon from '@material-ui/icons/ArrowDownward'
import DrumIcon from '@material-ui/icons/BlurCircular'
import SoundIcon from '@material-ui/icons/Alarm'
import React from 'react';


export const NUMERALS = [
    { key: 1, label: 'I', value : new m.I()},
    { key: 2, label: 'II', value : new m.II()},
    { key: 3, label: 'III', value : new m.III()},
    { key: 4, label: 'IV', value : new m.IV() },
    { key: 5, label: 'V', value: new m.V()},
]

export const SCALE = [
    { key: 1, label: 'C' },
    { key: 2, label: 'D' },
    { key: 3, label: 'E' },
    { key: 4, label: 'F#' },
    { key: 5, label: 'G' },
    { key: 6, label: 'A' },
    { key: 7, label: 'B' }
]

export const SONG_TOOLBAR_ITEMS = [
    { key: 1, label: 'Bar', icon: <BarIcon />},
    { key: 2, label: 'Add Chords', icon: <ChordIcon />},
    { key: 3, label: 'Add Lyric', icon: <LyricIcon />},
    { key: 1, label: 'Add Strum', icon: <StrumIcon />},
    { key: 2, label: 'Add Drum', icon: <DrumIcon />},
    { key: 3, label: 'Add Sound', icon: <SoundIcon />}
]

export const BPM = [
    { key: 2, label: '2' },
    { key: 4, label: '4' },
   /* { key: 8, label: '8' },
    { key: 12, label: '12' }*/
]

export const SONG_TYPES = [
    new m.ThreeChord(),
]