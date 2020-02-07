import {PipeTransform, Pipe} from '@angular/core'
//import { Transform } from 'stream'

@Pipe({
    name: 'shorten'
})

export class shortenPipe implements PipeTransform{

    transform(values: any,arg1,arg2){
        return values.substr(0,arg1)+'...';
    }

}