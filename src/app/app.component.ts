import { Component } from '@angular/core';
import { SharedService } from './shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public sharedService: SharedService, public router: Router) {}

  title = 'ChatPlication';

  currentUser: any = {
    id: '',
    username: '',
    email: '',
    password: '',
    roles: [],
    groups: [],
  }

  

  ngOnInit() {
    console.log("Testing if DOM is ready");

    let users = [
      {id: 0, username: 'super', email: 'super@email.com', password: '123', roles: ['user', 'group Admin', 'super Admin'], groups: ['group1', 'group2', 'group3']},
      {id: 1, username: 'user123', email: '123@email.com', password: '123', roles: ['user'], groups: ['group1']},
      {id: 2, username: 'user456', email: '456@email.com', password: '456', roles: ['user', 'group Admin'], groups: ['group2']},
    ]

    let groups = [
      {id: 0, interested: [], channels: [{channel1: [{super: "some ch1 text"}, {user123: "ch1 response text"}]}, {channel2: [{super: "some ch2 text"}]}]},
      {id: 1, interested: ['user123'], channels: [{channel1: [{super: "some ch1 text"}, {user456: "ch1 response text"}]}, {channel2: [{super: "some ch2 text"}]}]},
      {id: 2, interested: [], channels:[]},
    ]

    if(typeof(Storage) !== 'undefined') {
      console.log("Storage is Ready!")
      localStorage.setItem("users",JSON.stringify(users))
      localStorage.setItem("groups",JSON.stringify(groups))
    } else {
      console.log("No Storage Support")
    }

    if(this.sharedService.isLoggedIn = false) {
      this.router.navigate(['login']);
    }

  }

  onLogout() {
    this.sharedService.isLoggedIn = false;
    localStorage.setItem('loggedInUser', JSON.stringify(null))
  }

  onDeleteAccount() {
    this.sharedService.isLoggedIn = false;
    
    const users: any[] = JSON.parse(localStorage.getItem('users') || '[]');
    const loggedInUser: any = JSON.parse(localStorage.getItem('loggedInUser') || '[]');

    const userIndex = users.findIndex((user) => user.username === loggedInUser.username);
    if (userIndex !== -1) {
      users.splice(userIndex, 1);

      localStorage.setItem('users', JSON.stringify(users));

      if (loggedInUser && loggedInUser.username === loggedInUser.username) {
        localStorage.setItem('loggedInUser', JSON.stringify(null));
      }
    }     
  }

}
