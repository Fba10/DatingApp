
import { Router } from '@angular/router';
import { Usuario } from './../models/usuario';
import { ContaService } from './../services/conta.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-barra-nav',
  templateUrl: './barra-nav.component.html',
  styleUrls: ['./barra-nav.component.css']
})
export class BarraNavComponent implements OnInit {
  model: any = {};
  user: Usuario;
  nome: string;
  currentUser$: Observable<Usuario>;


  constructor(public conta: ContaService, private rotas: Router,
              private toasts: ToastrService) { }

  ngOnInit(): void {
  }

  login() {
    this.conta.login(this.model).subscribe(res => {
      this.rotas.navigateByUrl('/membros');
    });
  }



  logOut() {
    this.conta.logout();
  }

}
