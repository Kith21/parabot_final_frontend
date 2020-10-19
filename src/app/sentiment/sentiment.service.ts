import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SentimentService {

  constructor(private http:HttpClient) { }
  getSentimentDays(){
    return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/newsentiment');
  }
  getMessageCount(){
    return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/newsentiment');
      }
  getChatid(){
        return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/newsentiment1');
          }


  getfulldate(){
    return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/newsentiment');



     }
}
