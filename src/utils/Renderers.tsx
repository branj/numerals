import { Numeral } from "../data/Models";
import { SCALE } from "../data/Constants";

export class NumeralRenderer {

    static print( numeral: Numeral|undefined) : string {
        var tmpIndex = (numeral) ? numeral.getIndex() : false
        if(!tmpIndex){
            return ('')
        } 
        //Adjust for array offset
        tmpIndex = tmpIndex - 1;

        //Check for any transposition. 
        var keyOffset = 1 - 1;
        var finalOffset = ((tmpIndex + keyOffset)) % SCALE.length

        return SCALE[finalOffset].label
    }

}
