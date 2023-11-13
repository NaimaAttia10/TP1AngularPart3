import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { catchError, of, tap } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  formSubmissionError: string = '';
  isLoggedIn: boolean = false;

  constructor(private authService: AuthenticationService) {}

  onSubmit() {
    this.formSubmissionError = '';

    this.authService.login({email: this.email, password: this.password}).pipe(
      tap((response) => {
        if(response) console.log('Authentication successful:', response);
      }),
      catchError((error) => {
        console.error('Authentication error:', error);
        this.formSubmissionError = 'Authentication failed. Please check your credentials.';
        return of([false])
      })
    ).subscribe()

  }

}
