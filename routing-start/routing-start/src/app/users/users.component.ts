import { Component } from '@angular/core';
import { EventEmitter } from 'events';

import { userService } from'./user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {
  constructor(private userSer:userService){

  }
  

  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];

  emitFunction(){
    this.userSer.eventEmitter.emit(true);
  }
}

