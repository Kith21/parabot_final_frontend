import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UseravtivityService {

  constructor(private http:HttpClient) { }
  getUserActivity(){
    return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/newuserdate');
      }
    getRetUserCount(){
        return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/retusercompare');
          
      }
      getUserCount(){
        return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/totalusercompare');
          
      }
      getMessageActbydate(){
        return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/newdashchanges');
    
      }
}
