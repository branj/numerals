import * as m from './Models';

export const TEST_BAR_BEAT_EMPTY: m.BeatModel = {
    numeral : undefined
}

export const TEST_BAR_BEAT_I: m.BeatModel = {
    numeral : new m.I()
}

export const TEST_BAR_BEAT_II: m.BeatModel = {
    numeral : new m.II()
}

export const TEST_BAR_BEAT_III: m.BeatModel = {
    numeral : new m.III()
}

export const TEST_BAR_BEAT_IV: m.BeatModel = {
    numeral : new m.IV()
}

export const TEST_BAR_BEAT_V: m.BeatModel = {
    numeral : new m.V()
}

export const TEST_BAR_1: m.SongBarModel = {
    uuid : '1fe35579-5ce7-46ec-89e0-7e7236700297',
    lyrics : 'All my Exes live in texas',
    beats : [TEST_BAR_BEAT_I, TEST_BAR_BEAT_IV, TEST_BAR_BEAT_EMPTY, TEST_BAR_BEAT_EMPTY]
}

export const TEST_BAR_2: m.SongBarModel = {
    uuid : '1fe35579-5ce7-46ec-89e0-7e7236700294',
    lyrics : 'Blowing in the weind',
    beats : [TEST_BAR_BEAT_EMPTY, TEST_BAR_BEAT_IV, TEST_BAR_BEAT_EMPTY, TEST_BAR_BEAT_II]
}


export const TEST_VERSE: m.SongArrangementModel = {
    uuid : '1fe35579-5ce7-46ec-89e0-7e7236700297',
    label : 'Verse',
    bars : [
        TEST_BAR_1,
        TEST_BAR_1,
        TEST_BAR_2
    ],
}

export const TEST_CHORUS: m.SongArrangementModel = {
    uuid : '1fe35579-5ce7-46ec-89e0-7e7236700297',
    label : 'Chorus',
    bars : [
        TEST_BAR_1,
        TEST_BAR_1,
        TEST_BAR_2
    ],
}

export const TEST_BRIDGE: m.SongArrangementModel = {
    uuid : '1fe35579-5ce7-46ec-89e0-7e7236700297',
    label : 'Bridge',
    bars : [
        TEST_BAR_1,
        TEST_BAR_1,
        TEST_BAR_2
    ],
}

export const TEST_CONFIG: m.SongConfig = {
    bpm : 4,
    key: 1
}

export const TEST_SONG: m.SongModel = {
    uuid : '1fe35579-5ce7-46ec-89e0-7e7236704294',
    title: 'Free Bird',
    bars : [
        TEST_BAR_1,
        TEST_BAR_1,
        TEST_BAR_2
    ],
    arrangements : [
        TEST_VERSE,
        TEST_CHORUS,
        TEST_BRIDGE
    ],
    config : TEST_CONFIG
};


export const TEST_SONG_2: m.SongModel = {
    uuid : '1fe35539-5ce7-46ec-89e0-7e7236700294',
    title: 'Love is a battlefield',
    bars : [
        TEST_BAR_1,
        TEST_BAR_2,
        TEST_BAR_1
    ],
    arrangements : [
        TEST_VERSE,
        TEST_CHORUS,
        TEST_BRIDGE
    ],
    config : TEST_CONFIG
};

export const TEST_SONG_3: m.SongModel = {
    uuid : '1fe35539-5ce7-46ec-89e0-7e7236720294',
    title: 'Home on the range',
    bars : [
        TEST_BAR_1,
        TEST_BAR_2,
        TEST_BAR_2
    ],
    arrangements : [
        TEST_VERSE,
        TEST_CHORUS,
        TEST_BRIDGE
    ],
    config : TEST_CONFIG
};


export const SONGS = [TEST_SONG, TEST_SONG_2, TEST_SONG_3]

