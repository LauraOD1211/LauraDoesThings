import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: string;
  err: string;

  constructor(private http: HttpClient, private authService: AuthService, private router : Router) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()){
      this.router.navigate(['/blog']);
    }
  };

  onSubmit(username, password) {
    return this.http.post('login', {username, password}).subscribe((res) => {
      let token = res['token'];
      if(token != "invalid"){
        this.authService.setInfo(token);
        this.router.navigate(['/blog']);
      }
      else{
        console.log("Invalid username/pass");
      }
    }, (e) => {
      if (e instanceof HttpErrorResponse) {
        this.err = e.error.message;
      }
    });
  };

}
