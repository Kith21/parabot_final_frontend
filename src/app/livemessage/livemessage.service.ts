import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LivemessageService {

  constructor(private http:HttpClient) { }

  getLiveActivity(){
    return this.http.get('http://10.128.0.2:9990/');
  }
}
