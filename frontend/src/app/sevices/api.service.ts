import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrlDjango = 'http://127.0.0.1:8000'
  token = "Token 0a4d297db6c31f7482a6e6fc53ce5a111a2e8ae0"
  private httpHeaders = new HttpHeaders().set("content-type","application/json").set("Authorization",this.token)

  constructor(private http:HttpClient) { }

  getAllMembers(): Observable<any>{
    return this.http.get(this.baseUrlDjango + "/members/", 
      {headers : this.httpHeaders}
    )
  }

  getMember(id:number): Observable<any>{
    return this.http.get(this.baseUrlDjango + "/members/" + id + "/", 
      {headers : this.httpHeaders}
    )
  }
}
