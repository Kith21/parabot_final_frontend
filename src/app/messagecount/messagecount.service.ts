import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagecountService {

  constructor(private http:HttpClient) { }

  getMessageCount(){
    return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/user');
      }
      getMessageOutCount(){
        return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/daywise');
          }
          getMessageTotalCount(){
            return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/messagecompare');
              }
}
