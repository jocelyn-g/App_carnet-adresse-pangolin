import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router) { }

  saveToken(token: string): void{
    localStorage.setItem('token', token)
    this.router.navigate(['home'])
  }

  isLogged(): boolean{
    const token = localStorage.getItem('token')
    return !! token
  }

  clearToken(): void{
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    this.router.navigate(['/auth/login'])
  }

  getToken(): string | null{
    return localStorage.getItem('token')
  }
}
