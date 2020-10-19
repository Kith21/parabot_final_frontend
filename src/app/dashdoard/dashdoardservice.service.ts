import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardserviceService {

  constructor(private http:HttpClient) { }
  getUserActivity(){
    return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/useractivity');
      }
  getMessageActivity(){
    return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/userwizcount');
     }
  
  getTicketsDetails(){
    return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/tickets');
  }
  getMessageActbydate(){
    return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/newdashchanges');

  }
  getAllWords(){
    return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/wordcount');
  }
  getWords(){
    return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/wordcountdate');
  }
save(){
  return this.http.get('http://localhost:8000/');
}

  sendEmail(url, data) {
    
    return this.http.post(url, data);
  }
}
