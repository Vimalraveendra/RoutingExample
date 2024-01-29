import { Component, OnInit } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UserService]
})
export class UsersComponent implements OnInit {
   users:{id:number,name:string}[];
  constructor(private  userService:UserService){}
  ngOnInit() {
      this.users=this.userService.users;
  }

}
