import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnhandledmserviceService {

  constructor(private http:HttpClient) { }
  getunhandledmessage(){
    return this.http.get('http://10.128.0.2:9926/');
}
}
