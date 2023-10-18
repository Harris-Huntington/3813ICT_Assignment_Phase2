import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { dataService } from '../data.service';

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

  constructor(public sharedService: SharedService, public router: Router, public changeDetector: ChangeDetectorRef, private userData:dataService) { }

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

    // DB setup
    this.userData.loginUsers().subscribe((data) => {
      this.allUsers = data
      console.log("Find all users:", this.allUsers)
    })

    this.userData.getGroups().subscribe((data) => {
      this.currentGroups = data
      console.log("Find all groups:", this.currentGroups)
    })

  }

  onAccessGroup(groupId: number) {
    const groups: any[] = JSON.parse(localStorage.getItem('groups') || '[]');

    const currentGroup = groups.find((group) => group.id === groupId);
    localStorage.setItem('currentGroup', JSON.stringify(currentGroup));
    
  }

  onAccessGroupDB(groupId: number) { // Changed for DB
    const currentGroup = this.currentGroups.find((group) => group.id === groupId);
    localStorage.setItem('currentGroup', JSON.stringify(currentGroup));
    
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
    this.currentGroups.push({id: newGroupId, interested: [], channels:[]})
    localStorage.setItem('groups', JSON.stringify(this.currentGroups))
    localStorage.setItem('currentGroup', JSON.stringify({id: newGroupId, interested: [], channels:[]}))
    this.router.navigate(['group'])
  }

  onCreateGroupDB() {
    const newGroupId = this.currentGroups.length

    const user = this.allUsers.find(user => user.username === this.currentUser.username)
    if (user) { 
      if (!user.groups.includes('group' + (newGroupId + 1))) { // Adding a group to the user
        user.groups.push('group' + (newGroupId + 1));
        this.userData.setGroupToUser(user) // Adding the user to the group they created
      }
      localStorage.setItem('loggedInUser', JSON.stringify(user)); // Updating current user
    }

    const newGroup = {id: newGroupId, interested: [], channels:[]}
    this.userData.createGroup(newGroup) // Creating the new group
    localStorage.setItem('currentGroup', JSON.stringify(newGroup))
    this.router.navigate(['group'])
  }

  onDeleteGroupDB(groupId: number) {
    this.userData.deleteGroup(groupId);
  }

  onDeleteGroup(groupId: number) {
    const groups: any[] = JSON.parse(localStorage.getItem('groups') || '[]');

    const groupIndex = groups.findIndex((group) => group.id === groupId);
    if (groupIndex !== -1) {
      groups.splice(groupIndex, 1);

      localStorage.setItem('groups', JSON.stringify(groups));
    }  
  }


}
