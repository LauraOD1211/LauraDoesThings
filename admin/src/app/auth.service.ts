import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router : Router) {}
  
  public logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  };

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if(!token){
      return false;
    }
    return true;
  };

  public setInfo(token) {
    localStorage.setItem("token",token);
  }

  public resetInfo(token) {
    localStorage.removeItem('token');
    localStorage.setItem("token",token);
  }
    
}