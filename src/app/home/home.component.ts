import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  currentUser: any = {
    id: '',
    username: '',
    email: '',
    password: '',
    roles: [],
    groups: [],
  }

  currentGroups: any[] = []
  allUsers: any[] = []

  constructor(public sharedService: SharedService, public router: Router) { }

  ngOnInit(): void {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser != null) {
      this.currentUser = JSON.parse(loggedInUser)
    }

    const existingGroups = localStorage.getItem('groups')
    if(existingGroups != null) {
      this.currentGroups = JSON.parse(existingGroups)
    }

    const localData = localStorage.getItem('users')
    if(localData != null) {
      this.allUsers = JSON.parse(localData)
    }

  }

  

  onCreateGroup() {
    const newGroupId = this.currentGroups.length

    const user = this.allUsers.find(user => user.username === this.currentUser.username)
    if (user) { 
      if (!user.groups.includes('group' + (newGroupId + 1))) {
        user.groups.push('group' + (newGroupId + 1));
      }
      localStorage.setItem('users', JSON.stringify(this.allUsers));
      localStorage.setItem('loggedInUser', JSON.stringify(user));
    }
    this.currentGroups.push({id: newGroupId, interested: []})
    localStorage.setItem('groups', JSON.stringify(this.currentGroups))
    this.router.navigate(['group'])
  }

  onDeleteGroup() {
  
  }

}
