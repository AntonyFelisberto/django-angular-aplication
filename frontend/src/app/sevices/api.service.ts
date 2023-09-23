import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrlDjango = 'http://127.0.0.1:8000/members/'
  private httpHeaders = new HttpHeaders({"content-type": "application/json"})

  constructor(private http:HttpClient) { }

  getAllMembers(): Observable<any>{
    return this.http.get(this.baseUrlDjango, 
      {headers : this.httpHeaders}
    )
  }
}
