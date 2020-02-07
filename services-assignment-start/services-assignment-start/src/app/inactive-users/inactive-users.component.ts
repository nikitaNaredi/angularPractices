import { Component,OnInit } from '@angular/core';
import { UserServices } from '../UserServices.service'

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
  
})
export class InactiveUsersComponent implements OnInit{
 users: string[];

  constructor(private userServ: UserServices){}
  ngOnInit(){
    this.users = this.userServ.inactiveUsers;
  } 
 
  onSetToActive(id: number) {
    this.userServ.onSetToActive(id);
  }

}
