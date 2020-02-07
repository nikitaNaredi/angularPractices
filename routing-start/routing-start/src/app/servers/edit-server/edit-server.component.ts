import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ServersService } from '../servers.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  allowEdit = false;
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  changesSaved = false;
  @ViewChild('referServerName',{static: true}) referee: ElementRef;
  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log(this.route);
    this.route.queryParams.subscribe((queryparam: Params) => {
      this.allowEdit = (queryparam['allowedit'] === '1') ? true: false;
    });
    this.route.fragment.subscribe();
    this.route.params.subscribe((param: Params)=>{
      this.server = this.serversService.getServer(this.route.snapshot.params['id']);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    });
   
  }

  onUpdateServer() {
    if(this.allowEdit === true) {
      this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
      this.changesSaved = true;
      this.router.navigate(['../'],{relativeTo: this.route, queryParamsHandling: 'preserve'});
      console.log('uuuuuuu');
    }
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean{
    console.log("insdie deact");
    if(!this.allowEdit)
      return true;
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved)
      return confirm('Do u really wish to move');
    else 
     return true;
  }

}
