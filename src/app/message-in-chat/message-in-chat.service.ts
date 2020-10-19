import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MessageInChatService {

  constructor(private http:HttpClient) { }
  getMessageChatCount(){
    return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/messageinchat');
    /*return this.http.get('http://localhost:9901/');*/

}
getSomeChat()
{
  return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/chatin');
  /*return this.http.get('http://localhost:9902/');*/
}
}
