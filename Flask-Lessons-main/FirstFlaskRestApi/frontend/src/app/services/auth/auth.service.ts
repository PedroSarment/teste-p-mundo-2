import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 
  }

  register(data: any){

    // let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.post('http://127.0.0.1:5100/register', JSON.stringify(data), {
      headers: {'Content-Type':'vapplication/json'}
   });
      
  }
}
