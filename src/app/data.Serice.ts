import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
// import { data } from 'somewhere';

@Injectable({
    providedIn: 'root'
})
export class dataService {
    constructor(private http: HttpClient) {}

    findUsers(){
        return this.http.get<any>('http://localhost:3000/api/findusers')
    }
}