import { ActivatedRouteSnapshot,  RouterStateSnapshot,ResolveFn } from "@angular/router";
import { Inject } from "@angular/core";
import { Observable } from "rxjs";
import { ServersService } from "./servers.service";

interface server{
  id:number,
  name:string,
  status:string
}

export const ServerResolver : ResolveFn<server>=(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot,
):Observable<server>|Promise<server>|server=>{
     return Inject(ServersService).getServer(+route.params['id']);
}
        