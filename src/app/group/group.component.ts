import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  currentUser: any = {
    id: '',
    username: '',
    email: '',
    password: '',
    roles: [],
    groups: [],
  }

  allUsers: any[] = []

  constructor() { }

  ngOnInit(): void {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser != null) {
      this.currentUser = JSON.parse(loggedInUser)
    }

    const localData = localStorage.getItem('users')
    if(localData != null) {
      this.allUsers = JSON.parse(localData)
    }
  }

  promoteToGroupAdmin(username: string, newRole: string) {
    const user = this.allUsers.find(user => user.username === username)
    if (user) { 
      if (!user.roles.includes(newRole)) {
        user.roles.push(newRole);
      }
      localStorage.setItem('users', JSON.stringify(this.allUsers));
    }
  }

  promoteToSuperAdmin(username: string, newRole: string) {
    const user = this.allUsers.find(user => user.username === username)
    if (user) {
      if (!user.roles.includes('group Admin')) {
        user.roles.push('group Admin');
      } 
      if (!user.roles.includes(newRole)) {
        user.roles.push(newRole);
      }
      localStorage.setItem('users', JSON.stringify(this.allUsers));
    }
  }

}
