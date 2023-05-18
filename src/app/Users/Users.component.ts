import { Component, OnInit } from '@angular/core';
import { User } from 'Models/User';
import { UserDataService } from '../UserData.service';

@Component({
  selector: 'app-Users',
  templateUrl: './Users.component.html',
  styleUrls: ['./Users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<User> = [];
  constructor(private ds: UserDataService) { }

  ngOnInit() {
    this.users = this.ds.getData()
  }

}
