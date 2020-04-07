import {SONGS, TEST_SONG} from './Fixtures';
import {SongModel, SongEditHistory} from './Models';
import { SongHandler } from '../utils/Handlers';
import { SongFactory } from './SongFactory';

export class SongRepository {
    
    static getSong(songId? : number) : SongModel {
        if (songId) {
            console.log(songId);
            return SONGS[songId]
        }
        console.log(songId);
        return TEST_SONG     
    }
    static getSongs() : SongModel[] {
        return SONGS     
    }
    static getHistory(songId? : string) : SongEditHistory[] {
        if (songId) {
            var KEY = 'numeral-app-song-'+ songId +'-history';
            var songHistory = localStorage.getItem(KEY);
            var songString = songHistory ? songHistory : '[]';
            return JSON.parse(songString)
        } else {
            return []
        }
    }

    static setHistory(song : SongModel, handler : SongHandler) : SongEditHistory[] {
       var history = SongRepository.getHistory(song.uuid)
       var newHistory = SongFactory.makeHistory(song, handler)
       history.push(newHistory)
       var KEY = 'numeral-app-song-'+ song.uuid +'-history';
       localStorage.setItem(KEY, JSON.stringify(history));
       return SongRepository.getHistory(song.uuid)
    }


}
