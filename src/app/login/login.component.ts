import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUsers: any[] = [];

  wrongLogin = false;

  loginObj: any = {
    username: '',
    password: ''
  }

  constructor(public router: Router) { }

  ngOnInit(): void {
    const localData = localStorage.getItem('users')
    if(localData != null) {
      this.loginUsers = JSON.parse(localData)
    }
  }

  onLogin(){
    const doesUserExist = this.loginUsers.find(m => m.username == this.loginObj.username && m.password == this.loginObj.password)
    console.log("doesUserExist", doesUserExist)
    if(doesUserExist != undefined) {
      // alert('User login successful')
      localStorage.setItem("loggedInUser", JSON.stringify(doesUserExist))
      this.router.navigate(['home'])
    } else {
      // alert('User not found')
      this.wrongLogin = true
    }
  }

  // displayWrongLogin() {
  //   return `
  //     <h4>Wrong Username or Password</h4>
  //   `
  // }

}
