import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  // General service to store if the user is logged in
  isLoggedIn = false;
}
