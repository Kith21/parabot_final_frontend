import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MessageOutService {

  constructor(private http:HttpClient) { }

    getMessageCount(){
      return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/messageout');
        
  }
}
