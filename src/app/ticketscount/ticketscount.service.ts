import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TicketscountService {

  constructor(private http:HttpClient) {

   }
   getResolvedDetails(){
    return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/resolved');
      }
      getPendingDetails(){
        return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/pending');
          }
    
    getAssignedDetails(){
      return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/assigned');
        }
      }

