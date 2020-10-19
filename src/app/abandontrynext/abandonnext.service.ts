import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AbandonnextService {

  constructor(private http:HttpClient) { }
  getChats(){
    return this.http.get('http://10.128.0.2:9928/');
  }
}
