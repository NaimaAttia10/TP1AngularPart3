import { state } from '@angular/animations';
import { AuthenticationService } from './../authentication.service';
import { Component, Inject, inject } from '@angular/core';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  state$ : Observable<boolean>;
  constructor(private auth:AuthenticationService){
     this.state$  = this.auth.loggedIn$
  }
  //@Inject(AuthenticationService) private x: AuthenticationService

  logout(){
    this.auth.logout()
  }
}
