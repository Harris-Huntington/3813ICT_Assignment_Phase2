import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
// import { data } from 'somewhere';

@Injectable({
    providedIn: 'root'
})
export class dataService {
    constructor(private http: HttpClient) {}

    findUsers(){
        console.log('findUsers testing')
        return this.http.get<any>('http://localhost:3000/api/findusers')
    }

    loginUsers(){
        console.log('loginUsers testing')
        return this.http.get<any>('http://localhost:3000/api/loginusers')
    }
}