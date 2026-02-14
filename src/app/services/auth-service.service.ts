import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  private apiUrl = 'http://localhost:5000/api/auth';
  private tokenKey = 'jwt_token';
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) { }

  register(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { email, password });
  }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((response) => {
        if (response.token) {
          localStorage.setItem(this.tokenKey, response.token);
          this.isLoggedInSubject.next(true);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.isLoggedInSubject.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return this.hasToken();
  }
}
