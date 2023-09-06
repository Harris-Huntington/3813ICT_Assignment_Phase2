import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

  constructor(public sharedService: SharedService, public router: Router, public changeDetector: ChangeDetectorRef) { }

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

  onAccessGroup(groupId: number) {
    const groups: any[] = JSON.parse(localStorage.getItem('groups') || '[]');

    const currentGroup = groups.find((group) => group.id === groupId);
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

  onDeleteGroup(groupId: number) {
    const groups: any[] = JSON.parse(localStorage.getItem('groups') || '[]');

    const groupIndex = groups.findIndex((group) => group.id === groupId);
    if (groupIndex !== -1) {
      groups.splice(groupIndex, 1);

      localStorage.setItem('groups', JSON.stringify(groups));
    }  
    // console.log("delete", this._reload)
    // this.reload()
    // this.reRenderer()
    // this.router.navigate(['group'])
    // this.router.navigate(['home'])
  }

  // public _reload = true;

  // private reload() {
  //   setTimeout(() => {this._reload = false}, 500)
  //   this.changeDetector.detectChanges();
  //   console.log("reload1", this._reload)
  //   setTimeout(() => {this._reload = true}, 2000)
  //   console.log("reload2", this._reload)

  //   // this._reload = false;
  //   // this.changeDetector.detectChanges();
  //   // console.log("reload1", this._reload)
  //   // this._reload = true;
  // }

  // public reRenderProps: Array<number> = [0]

  // public reRenderer(): void {
  //   this.reRenderProps[0]++
  //   console.log("should Rerender", this.reRenderProps)
  // }

}
