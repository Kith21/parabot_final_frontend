import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageOutChatService {

  constructor(private http:HttpClient) { }

  getMessageChatoutCount(){
    return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/messageoutchat');
  }
  getSomeChatout()
{
  return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/chatout');
}
}
