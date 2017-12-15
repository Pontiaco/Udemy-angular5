import { identifierModuleUrl } from '@angular/compiler';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  // ID: number = +this.server.id

  constructor(private serversService: ServersService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.data
    .subscribe(
      (data: Data) => {
        // serverAppRoutMod nombre largo para identificar de donde viene
        this.server = data.serverAppRoutMod
      }
    )
    // const ID = +this.activatedRoute.snapshot.params.id
    // this.server = this.serversService.getServer(ID)
    // // Subscribe to have the latest id
    // this.activatedRoute.params.subscribe(
    //   (myParams: Params) => {
    //     this.server = this.serversService.getServer(+myParams.id)
    //   }
    // )
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute} )
  }

}
