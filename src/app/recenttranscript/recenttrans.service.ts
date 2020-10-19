import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecenttransService {

  constructor(private http:HttpClient) { }
  getAllWords(){
    return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/wordcount');
  }
  getWords(){
    return this.http.get('http://localhost:9926/');
  }
}
