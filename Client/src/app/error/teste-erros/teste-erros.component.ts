import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-teste-erros',
  templateUrl: './teste-erros.component.html',
  styleUrls: ['./teste-erros.component.css']
})
export class TesteErrosComponent implements OnInit {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  get404Error() {
    this.http.get(this.baseUrl + 'buggy/not-found'). subscribe(res =>{
      console.log(res);
    }, erro => {
      console.log(erro);
    });
  }

  get400Error() {
    this.http.get(this.baseUrl + 'buggy/bad-request'). subscribe(res =>{

    }, error => {
      console.log(error);
    });
  }
  get500Error() {
    this.http.get(this.baseUrl + 'buggy/server-error'). subscribe(res =>{
      console.log(res);
    }, erro => {
      console.log(erro);
    });
  }
  get401Error() {
    this.http.get(this.baseUrl + 'buggy/auth'). subscribe(res =>{
      console.log(res);
    }, erro => {
      console.log(erro);
    });
  }
  get400ValidationError() {
    this.http.post(this.baseUrl + 'conta/registrar', {}). subscribe(res =>{
      console.log(res);
    }, erro => {
      console.log(erro);
    });
  }

}
