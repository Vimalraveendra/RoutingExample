import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, UrlTree } from '@angular/router';


@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent  implements OnInit{
  server:{id:number,name:string,status:string};
  serverName="";
  serverStatus="";
  allowEdit=false;
  changesSaved=false;

  constructor(
    private serversService:ServersService,
    private route:ActivatedRoute,
    private router:Router,
    ){}
  ngOnInit() {
      this.route.queryParams.subscribe(
        (queryParams:Params)=>{
           this.allowEdit=queryParams['allowEdit']==='1' ? true:false;
        }
      ) 
      const serverId = +this.route.snapshot.params['serverId']
      this.server=this.serversService.getServer(serverId);
      this.serverName=this.server.name;
      this.serverStatus=this.server.status; 
  }
  onUpdateServer(){
      this.serversService.updateServer(this.server.id,{name:this.serverName,status:this.serverStatus})
      this.changesSaved=true;
      this.router.navigate(['../'],{relativeTo:this.route})
  }
  canDeactivate(){
    if(!this.allowEdit){
      return UrlTree;
    }
    if((this.serverName!==this.server.name || this.serverStatus!==this.server.status)&& !this.changesSaved){
      return confirm('Do you want to discard chan')
 }else{
   return true;
 }
}
}
