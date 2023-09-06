import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SFassignment';

  createUserObj: any = {
    username: '',
    email: '',
    password: '',
  }

  loginObj: any = {
    username: '',
    password: '',
  }

  ngOnInit() {
    console.log("Testing if DOM is ready");

    let users = [ {id: 0, username: 'super', email: 'super@email.com', password: '123', roles: ['user', 'groupA', 'superA'], groups: ['group1', 'group2', 'group3'], loggedIn: false},
                  {id: 1, username: 'user123', email: '123@email.com', password: '123', roles: ['user'], groups: ['group1'], loggedIn: false},
                  {id: 2, username: 'user456', email: '456@email.com', password: '456', roles: ['user', 'groupA'], groups: ['group1', 'group2'],loggedIn: false},
                ]

    if(typeof(Storage) !== 'undefined') {
      console.log("Storage is Ready!")
      localStorage.setItem("users",JSON.stringify(users))
      // console.log(localStorage.getItem("users"))
      let newUsers = localStorage.getItem("users") || "";
      console.log(JSON.parse(newUsers))
    } else {
      console.log("No Storage Support")
    }
  }


}
