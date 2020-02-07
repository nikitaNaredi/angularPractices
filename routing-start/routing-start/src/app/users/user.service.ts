import { EventEmitter,Injectable } from "@angular/core";
import  { Subject } from 'rxjs'
@Injectable()

export class userService{

//active = false;
eventEmitter = new EventEmitter<boolean>();

//Crross componenet communication Subject//
sub = new Subject<boolean>();
//Crross componenet communication Subject//

}