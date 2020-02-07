import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    users: {id: number, name: string};
    constructor(private route: ActivatedRoute){}
    ngOnInit(){
      console.log('id : '+this.route.snapshot.params['id']);
      console.log('id : '+this.route.snapshot.params['name']);
      this.users = { id : this.route.snapshot.params['id'],
                    name : this.route.snapshot.params['name']
                    };
      this.route.params.subscribe((params: Params)=>{
        this.users.id = params['id'];
        this.users.name = this.route.snapshot.params['name']
      });
      
    };
   
  
}
