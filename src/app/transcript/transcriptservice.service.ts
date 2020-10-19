import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranscriptserviceService {

  constructor(private http:HttpClient) { }
  getMessageCount(){
    return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/transcript_next');
      
}
get_transcript_7_days(){
  return this.http.get('https://pythoncode-dot-ft-bal-jdnxov.uc.r.appspot.com/transcript');
    
}
}
