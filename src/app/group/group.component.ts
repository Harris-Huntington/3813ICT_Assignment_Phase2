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
  currentGroup: any = []

  constructor() { }

  ngOnInit(): void {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser != null) {
      this.currentUser = JSON.parse(loggedInUser)
    }

    const localUserData = localStorage.getItem('users')
    if(localUserData != null) {
      this.allUsers = JSON.parse(localUserData)
    }

    const localGroupData = localStorage.getItem('currentGroup')
    if(localGroupData != null) {
      this.currentGroup = JSON.parse(localGroupData)
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

  removeUser(username: string) {
    const user = this.allUsers.find(user => user.username === username)
    if (user) {
      user.groups.pop();
      localStorage.setItem('users', JSON.stringify(this.allUsers));
    }
  }

  deleteUser(username: string) {
    const users: any[] = JSON.parse(localStorage.getItem('users') || '[]');

    const userIndex = users.findIndex((user) => user.username === username);
    if (userIndex !== -1) {
      users.splice(userIndex, 1);

      localStorage.setItem('users', JSON.stringify(users));
    } 
  }

}
