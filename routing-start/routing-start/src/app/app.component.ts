import { Component } from '@angular/core';
import { userService } from './users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activatedSubRevision = false;
  constructor(private emitterTest: userService){}

  ngOnInit(){
    
   this.emitterTest.eventEmitter.subscribe(data=>{
    this.activatedSubRevision = data;
   });
   /* Using Subject
   this.emitterTest.sub.subscribe(data=>{
    this.activatedSubRevision = data;
   });
   */
  }
}
