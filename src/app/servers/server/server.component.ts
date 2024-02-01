import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit{
  server:{id:number,name:string,status:string}
  constructor(
    private serversService:ServersService,
    private route:ActivatedRoute,
    private router:Router,
    ){}
  ngOnInit() {
    
    const serverId= +this.route.snapshot.params['serverId'];
      this.server=this.serversService.getServer(serverId);
     
      this.route.params.subscribe(
        (params:Params)=>{
          this.server=this.serversService.getServer(+params['serverId']);
        }
      )
  }
  onEditServer(){
    this.router.navigate(['edit'], {relativeTo:this.route, queryParamsHandling:'preserve'})
  }
}