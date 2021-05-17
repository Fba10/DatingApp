import { Usuario } from './models/usuario';
import { ContaService } from './services/conta.service';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Client';
  usuarios: any;
  localSt: any;

  constructor(private http: HttpClient, private conta: ContaService) {}

  ngOnInit() {
    this.setCorrentUser();
  }

  setCorrentUser() {
    this.localSt = localStorage.getItem('user');
    const user: Usuario = JSON.parse(this.localSt);
    this.conta.setCurrentUser(user);

  }
}
