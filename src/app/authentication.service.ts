import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { UserAuth } from './UserAuth';
import { LoginData } from './LoginData';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  private apiUrl = 'https://apilb.tridevs.net/api/Users/login';
  private user = new BehaviorSubject<UserAuth|null>(null)
  authedUser$ = this.user.asObservable()
  loggedIn$ = this.user.asObservable().pipe(
    map((v)=>{
         if (!v){
          return false
         }
      return true
    })
  )
  constructor(private http: HttpClient) {
    const exist=localStorage.getItem("user")
    if (exist) {
      this.user.next(JSON.parse(exist))
    }
  }

  login(data: LoginData): Observable<any> {
    return this.http.post<UserAuth>(this.apiUrl, data).pipe(
      tap((val)=>{
        this.user.next(val)
        localStorage.setItem("user",JSON.stringify(val))
      }
      )
    )
  }

  logout(){
    localStorage.removeItem("user")
    this.user.next(null)
  }



}
