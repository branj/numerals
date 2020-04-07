import { SongModel, Numeral, SongConfig } from "../data/Models"
import { SongFactory } from "../data/SongFactory"

export abstract class SongHandler {
    static KEY: string
    abstract title:string
    abstract description:string
    abstract handle(song: SongModel): void
    abstract getDescription():string
}

export class NumeralHandler implements SongHandler {
    static KEY:string = 'NUMERAL_CHANGE'
    title:string = "Changed Numeral"
    description:string = "Numeral Description";

    beatIndex!: number
    barIndex!: number
    numeral!: Numeral
    
    getDescription(): string {
        return "Changed Numeral @beat-" +  this.beatIndex + "-bar-" + this.barIndex
    }
    handle(song: SongModel): void {
        console.log('Numeral changed', song, this.beatIndex, this.barIndex, this.numeral)
        song.bars[this.barIndex].beats[this.beatIndex].numeral = this.numeral
        this.description = this.getDescription()
    }
}

export class BarLyricHandler implements SongHandler {
    static KEY:string = 'LYRIC_CHANGE'
    title:string = "Changed Lryic"
    description:string = "Lyric Description";

    barIndex!: number
    lyric!: string
    getDescription(): string {
        return "Alterd lyrics '" +  this.lyric + "' @" + this.barIndex
    }
    handle(song: SongModel): void {
        console.log('Lyric changed...', song, this.barIndex, this.lyric)
        song.bars[this.barIndex].lyrics = this.lyric
        this.description = this.getDescription()
    }
}

export class BarRemoveHandler implements SongHandler {
    static KEY:string = 'BAR_REMOVE'
    title:string = "Removed Bar"
    description:string = "Removed a bar";
    barIndex!: number
    getDescription(): string {
        return "Removed bar @" + this.barIndex
    }
    handle(song: SongModel): void {
        console.log(song.bars, this.barIndex)
        var tmpBars = song.bars
        var self = this
        var filteredBars = tmpBars.filter(function(value, index, arr){
            return index !== self.barIndex
        });
        song.bars = filteredBars
        this.description = this.getDescription()
    }
}

export class BarAddHandler implements SongHandler {
    static KEY:string = 'BAR_ADD'
    title:string = "Added Bar"
    description:string = "Added a bar";
    barNum!:number
    label: string = ''
    getDescription(): string {
        return "Add ("+ this.barNum + ") Bars!"
    }
    handle(song: SongModel): void {
        console.log('Adding Bar...', song, this.barNum)
        var songFactory = new SongFactory(song.config)
        song.arrangements.push(songFactory.makeArrangement(this.label))
        this.description = this.getDescription()
    }
}

export class BarMoveHandler implements SongHandler {
    static KEY:string = 'BAR_MOVE'
    title:string = "Bar Moved"
    description:string = "Moved a Bar";
    up!: boolean
    barIndex!: number
    allTheWay!: boolean
    getDescription(): string {
        return "Moved a bar: Up| " +  this.up + ", @index| " + this.barIndex + " @allTheWay|" + this.allTheWay
    }
    handle(song: SongModel): void {
        console.log('Moving Bar...', song, this.up, this.barIndex)
        var tmpIndex = this.barIndex 
        var totalBars = song.bars.length
        
        // Zero is the top, so up is down here
        if (this.up && tmpIndex !== 0) {
            tmpIndex = this.allTheWay ? 0 : tmpIndex - 1
        } else if (tmpIndex < totalBars) {
            tmpIndex = this.allTheWay ? totalBars - 1 : tmpIndex + 1
        }
        console.log(song.bars)
        var tmpBar = song.bars[tmpIndex];

        song.bars[tmpIndex] = song.bars[this.barIndex]
        song.bars[this.barIndex] = tmpBar
        console.log(song.bars)
        this.description = this.getDescription()
    }
}

export class BarDuplicateHandler implements SongHandler {
    static KEY:string = 'BAR_DUPLICATED'
    title:string = "Duplicated Bar"
    description:string = "Duplicated a bar";
    barIndex!:number
    getDescription(): string {
        return "Duplicated Bar at index of " +  this.barIndex
    }
    handle(song: SongModel): void {
       console.log('Duplicating Bar... ()', song, this.barIndex)
       var songFactory = new SongFactory(song.config)
       var newBar = {...song.bars[this.barIndex]};
       newBar.uuid = songFactory.makeUUID()
       song.bars.push(newBar) 
       this.description = this.getDescription()
    }
}

export class ConfigHandler implements SongHandler {
    static KEY:string = 'CONFIG_CHANGED'
    title:string = "Changed Config"
    description:string = "The Config changed";
    config!: SongConfig
    getTitle(): string {
        return "Changed Config"
    }
    getDescription(): string {
        return "Changed Config to: Key|" +  this.config.key + ", BPM|" + this.config.bpm
    }
    handle(song: SongModel): void {
        console.log('Setting Config...', song, this.config)
        song.config = this.config
        this.description = this.getDescription()
    }
}

export class SongTitleHandler implements SongHandler {
    static KEY:string = 'TITLE_UPDATED'
    title:string = "Updated the Title"
    description:string = "Updated the Song's title";
    updateTitle!: string
    getTitle(): string {
        return "Changed Song Title"
    }
    getDescription(): string {
        return "Changed title to: " +  this.updateTitle
    }
    handle(song: SongModel): void {
        console.log('Updating title...', this.updateTitle)
        song.title = this.updateTitle
        this.description = this.getDescription()
    }
}

export class BeatHandler implements SongHandler {
    static KEY:string = 'BEAT_ADDED'
    title:string = "Added Beat"
    description:string = "Added a Song Beat";
    
    barIndex!: number
    getDescription(): string {
        return "Added a beat at " +  this.barIndex
    }
    handle(song: SongModel): void {
        console.log('Adding beat...', this.barIndex)
        var songFactory = new SongFactory(song.config)
        song.bars[this.barIndex].beats.push(songFactory.makeBeat())
        this.description = this.getDescription()
    }
}
