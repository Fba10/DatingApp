import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 baseUrl = environment.baseUrl;
  ModuloDeRegistro = false;
  usuarios: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  OpcaoDeRegistro() {
    this.ModuloDeRegistro = !this.ModuloDeRegistro;
  }

  getUser() {
this.http.get(this.baseUrl + 'usuarios').subscribe(usuarios => this.usuarios = usuarios);
  }

}
