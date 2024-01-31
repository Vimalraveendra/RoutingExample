import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import {  RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user/user.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'servers',component:ServersComponent},
  {path:'users',component:UsersComponent},
  {path:'users/:userId/:name',component:UserComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
