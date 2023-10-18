import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

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

    deleteUsers(userID: number){
        console.log('deleteUsers testing')
        return this.http.post<any>('http://localhost:3000/api/deleteuser', { "userID": userID})
    }

    createUser(user: object){
        console.log('createUser testing')
        return this.http.post<any>('http://localhost:3000/api/createuser', {"user": user})
    }

    createGroup(group: object){
        console.log('createGroup testing')
        return this.http.post<any>('http://localhost:3000/api/creategroup', {"group": group })
    }

    getGroups() {
        console.log('getGroups testing')
        return this.http.get<any>('http://localhost:3000/api/getgroups')
    }

    setGroupToUser(user:object) {
        console.log('setGroupToUser testing')
        return this.http.post<any>('http://localhost:3000/api/setgrouptouser', {"user": user})
    }

    deleteGroup(groupID:number) {
        console.log('deleteGroup testing')
        return this.http.post<any>('http://localhost:3000/api/deletegroup', {"groupID": groupID})
    }
}