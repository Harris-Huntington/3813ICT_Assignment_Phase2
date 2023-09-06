import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  createUserObj: any = {
    id: '',
    username: '',
    email: '',
    password: '',
    roles: ["user"],
    groups: [],
    loggedIn: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  
  onCreateUser() {
    let oldUsers = JSON.parse(localStorage.getItem("users") || "");
    this.createUserObj.id = oldUsers.length
    oldUsers.push(this.createUserObj);
    console.log("oldUsers", oldUsers);
    localStorage.setItem('users', JSON.stringify(oldUsers));
  }
}
