
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Client';
  usuarios: any;
  /**
   *
   */
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getUsurios();
  }


   getUsurios() {
    this.http.get('https://localhost:5001/api/usuarios').subscribe(resposta => {
     this.usuarios = resposta;
   },error =>{
     console.log(error);
   })

  }



}
