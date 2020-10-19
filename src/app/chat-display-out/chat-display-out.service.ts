import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChatDisplayOutService {

  constructor(private http:HttpClient) { }
  getEntireChat(){
    return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/chatout');
      
}
}
