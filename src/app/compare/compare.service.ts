import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CompareService {

  constructor(private http:HttpClient) { }
  getNewUserCount(){
    return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/newusercompare');
      
}
getRetUserCount(){
  return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/retusercompare');
    
}
getMessageCount(){
  return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/messagecompare');
    
}
getUserCount(){
  return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/totalusercompare');
    
}
getGenderCount(){
  return this.http.get('http://10.128.0.2:9910/');
    
}


}
