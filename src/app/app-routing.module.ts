import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component'; 

import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from "./auth-guard.service";
import { canDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";


const appRoutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'servers',
    //  canActivate:[AuthGuard], used for protecting the whole route including children
    canActivateChild:[AuthGuard],
     component:ServersComponent,children:[
      {path:':serverId',component:ServerComponent},
      {path:':serverId/edit',component:EditServerComponent ,canDeactivate:[(component:EditServerComponent)=>component.canDeactivate()]},
    ]},
    {path:'users',component:UsersComponent ,children:[
      {path:':userId/:name',component:UserComponent},
    ]},
    // {path:'not-found',component: PageNotFoundComponent},
    {path:'not-found',component: ErrorPageComponent ,data:{message:'Page not found!'}},
    {path:"**", redirectTo:'/not-found'}
  ]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
  
export class AppRoutingModule{


}