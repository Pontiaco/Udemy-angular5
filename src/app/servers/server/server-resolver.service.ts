import { Injectable } from '@angular/core';
import { ServersService } from '../servers.service';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

interface Server {
    id: number,
    name: string,
    status: string
}

@Injectable()
export class ServerResolver implements Resolve<Server> {

    constructor(private serverService: ServersService) {}

    resolve(route: ActivatedRouteSnapshot, router: RouterStateSnapshot):
    Observable<Server> | Promise<Server> | Server {
        return this.serverService.getServer(+route.params.id)
    }
}