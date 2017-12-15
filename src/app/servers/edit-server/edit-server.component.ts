import { Observable } from 'rxjs/Rx';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowedit = false
  changesSaved = false

  constructor(private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.queryParams)
    console.log(this.activatedRoute.snapshot.fragment)
    this.activatedRoute.queryParams
    .subscribe(
      (queryParams: Params) => {
        this.allowedit = queryParams['allowedit'] === '1' ? true : false
      }
    )
    this.activatedRoute.fragment.subscribe()
    const id = +this.activatedRoute.snapshot.params.id
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id,
      { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true
    // navigate away
    this.router.navigate(['../'], { relativeTo: this.activatedRoute })
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowedit) {
      return true
    }
    if ((this.serverName !== this.server.name ||
      this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('Do you to discard the changes?')
    } else {
      return true
    }

  }
}

