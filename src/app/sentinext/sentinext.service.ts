import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SentinextService {

  constructor(private http:HttpClient) { }

  getChatid(){
    return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/newsentiment1');
      }
    
  getChat(){
        return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/newsentiment2');
          }
}
