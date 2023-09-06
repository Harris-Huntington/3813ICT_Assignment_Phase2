import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // currentUser: any[] = [];

  currentUser: any = {
    id: '',
    username: '',
    email: '',
    password: '',
    roles: [],
    groups: [],
  }

  constructor(public sharedService: SharedService, public router: Router) { }

  ngOnInit(): void {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser != null) {
      this.currentUser = JSON.parse(loggedInUser)
    }

  }

  

}
