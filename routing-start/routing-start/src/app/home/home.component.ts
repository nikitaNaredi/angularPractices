import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginService } from '../auth-login.service';

import {interval, Subscription, Observable, Subject} from 'rxjs';
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
//private router;
private obs;

  constructor(private router: Router, private auth: AuthLoginService) { }

  ngOnInit() {
    // this.obs = interval(1000).subscribe((count)=>{
    //   console.log('Count ',count);
    // })

    const obs1 = Observable.create(obser => {
      let count = 0;
      
      setInterval(()=>{
        if(count> 3)
          obser.error( new Error('Greater than 3') );
        
        if(count> 2)
          obser.complete('Completed');
        
        obser.next(count);
        count++;
      },1000);
      
        
    });

    this.obs = obs1.pipe(map( (data: number) => {
      return (data + 2);
    }), filter(data=>{
      return data>3;
    })).subscribe(data => {
      console.log(data);
    },(msg)=>{
      console.log(msg.message);
    },(complete)=>{
      console.log(complete);
    });
  }


  ngOnDestroy() {
    this.obs.unsubscribe();
  }

  loadServer(){
    this.router.navigate(['/servers']);
  }

  login(){
    this.auth.login();
  }
  logout(){
    this.auth.logout();
  }
}
