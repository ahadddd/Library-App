import { Component, OnInit } from '@angular/core';
import { User } from 'Models/User';

@Component({
  selector: 'app-Users',
  templateUrl: './Users.component.html',
  styleUrls: ['./Users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<User> = [
    {
      "id": 1,
      "name": "John Smith",
      "books": []
    },
    {
      "id": 2,
      "name": "Emily Johnson",
      "books": []
    },
    {
      "id": 3,
      "name": "Michael Williams",
      "books": []
    },
    {
      "id": 4,
      "name": "Sophia Brown",
      "books": []
    },
    {
      "id": 5,
      "name": "Daniel Jones",
      "books": []
    },
    {
      "id": 6,
      "name": "Olivia Davis",
      "books": []
    },
    {
      "id": 7,
      "name": "Matthew Miller",
      "books": []
    },
    {
      "id": 8,
      "name": "Emma Wilson",
      "books": []
    },
    {
      "id": 9,
      "name": "Christopher Taylor",
      "books": []
    },
    {
      "id": 10,
      "name": "Ava Anderson",
      "books": []
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
