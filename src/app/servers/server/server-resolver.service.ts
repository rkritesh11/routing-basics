import { ServersService } from './../servers.service';
import { Observable } from 'rxjs';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

export interface Server {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ServerResolverService implements Resolve<Server> {

    constructor(private serversService: ServersService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
        const serverId = +route.params['id'];
        return this.serversService.getServer(serverId);
    }
}
