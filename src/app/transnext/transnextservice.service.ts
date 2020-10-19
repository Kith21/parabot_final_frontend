import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransnextserviceService {

  constructor(private http:HttpClient) { }

    getChats(){
      return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/transcript_second');
    }
   
}

