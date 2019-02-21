import { Server } from './server-resolver.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.server = this.serversService.getServer(1);
    // this.activatedRoute.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(+params['id']);
    // });
    this.activatedRoute.data.subscribe((data: Data) => {
      this.server = data.server;
    });
  }

  editServer() {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute, queryParamsHandling: 'preserve' });
  }

}
