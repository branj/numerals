import {SongConfig, SongBarModel, BeatModel, SongModel, I, II, III, IV, V, Numeral, SongEditHistory, SongArrangementModel} from './Models';
import { SONG_TYPES } from './Constants';
import { SongHandler } from '../utils/Handlers';
import { TEST_BAR_1 } from './Fixtures';

export class SongFactory {
    public config: SongConfig
    constructor(config : SongConfig) {
        this.config = config
    }

    makeArrangement(label : string) : SongArrangementModel {
        const TMP_ARRANGEMENT: SongArrangementModel = {
            uuid : '1fe35579-5ce7-46ec-89e0-7e7236700297',
            label : label,
            bars : [
               TEST_BAR_1
            ],
        }
        return TMP_ARRANGEMENT
    }

    makeBar() : SongBarModel {
        const TMP_BAR : SongBarModel = {
            uuid : this.makeUUID(),
            lyrics : '',
            beats : []
        }
        for(var i=0;i<this.config.bpm;i++){
            const TMP_BEAT : BeatModel = {
                numeral : undefined
            }
            TMP_BAR.beats.push(TMP_BEAT)
        }
        return TMP_BAR     
    }
    makeBeat() : BeatModel {
        const TMP_BEAT : BeatModel = {
            numeral : this.makeNumeral(2)
        }
        return TMP_BEAT;   
    }
    makeSong(type? : string) : SongModel {
        
        var song: SongModel = {
            uuid: this.makeUUID(),
            title: 'Give me a title',
            bars : [
                
            ],
            arrangements : [],
            config : this.config
        };

        if (type) {
            var foundType = SONG_TYPES.find( (songType) => {
                return songType.label === type
            })
            if(foundType) {
                song.bars = foundType.getBars(this)
            }
        }

        return song;     
    }

    makeNumeral(numeral : number):Numeral|undefined {
        return [
            undefined,
            new I(),
            new II(),
            new III(),
            new IV(),
            new V()
        ][Math.ceil(numeral)]
    }

    makeUUID():string{
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c==='x' ? r :((r&0x3)|0x8)).toString(16);
        });
        return uuid;
    }

    static makeHistory(songState: SongModel, handler: SongHandler) : SongEditHistory {
        var songHs: SongEditHistory = {
            songState: songState,
            handler: handler
        };
        return songHs;
    }
}
