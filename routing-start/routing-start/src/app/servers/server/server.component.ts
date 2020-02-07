import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // console.log('inside'+this.route.snapshot.params['id']);
    // this.server = this.serversService.getServer(this.route.snapshot.params['id']);
    // console.log('insidejhb'+this.server);
    // //this.server = this.serversService.getServer(this.route.params['id']);
    // this.route.params.subscribe(
    //   (param) => {
    //     console.log('this.route.params[id]:: '+this.route.snapshot.params['id']);
    //     this.server = this.serversService.getServer(param['id']);
    //   }
    // )
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    )
  }

  onEdit(){
    // this.router.navigate(['/servers', this.server.id, 'edit']);
   // this.router.navigate(['edit'], {relativeTo: this.route, queryParams: {'allowedit': this.route.snapshot.queryParams['allowedit']}});
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'}); //this preserves the previous queries.
  }

}
