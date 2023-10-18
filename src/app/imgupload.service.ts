import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})

export class ImguploadService {
    constructor(private http: HttpClient) { }

    imgupload(fd:any){ // Setting route for the image upload information
        return this.http.post<any>('/api/upload', fd)
    }
}