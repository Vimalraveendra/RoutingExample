import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import {  RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { FormsModule } from '@angular/forms';
import { ServersService } from './servers/servers.service';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'servers',component:ServersComponent},
  {path:'users',component:UsersComponent},
  {path:'users/:userId/:name',component:UserComponent},
  {path:'servers/:serverId/edit',component:EditServerComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
