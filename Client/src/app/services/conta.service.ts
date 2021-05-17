import { Usuario } from './../models/usuario';

import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';






@Injectable({
  providedIn: 'root'
})
export class ContaService {

baseUrl = environment.baseUrl;
private currentUserSource = new ReplaySubject<Usuario>(1);
correntUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post<Usuario>(this.baseUrl + 'conta/login', model).pipe(
      map((response: Usuario) => {
        const user = response;
        if (user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  registrar(model: any) {
      return this.http.post<Usuario>(this.baseUrl + 'conta/registrar', model).pipe(
        map((user: Usuario) => {
          if (user){
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUserSource.next(user);
          }
        })
      );
  }
  setCurrentUser(user: Usuario) {
    this.currentUserSource.next(user);
  }
  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null || undefined);
  }

  }

