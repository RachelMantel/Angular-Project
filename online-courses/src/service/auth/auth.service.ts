// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../user/user.service';



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private userService: UserService) {}

  login(formData: any) {
    return this.http.post('http://localhost:3000/api/auth/login', formData);
  }

  register(formData: any) {
    return this.http.post('http://localhost:3000/api/auth/register', formData);
  }
}
