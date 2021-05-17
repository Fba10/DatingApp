import { ContaService } from './../services/conta.service';
import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-registrar',
  templateUrl: './form-registrar.component.html',
  styleUrls: ['./form-registrar.component.css']
})
export class FormRegistrarComponent implements OnInit {
  @Input() usersFormHomeComponent: any;
  model: any = {};

  constructor(private conta: ContaService, private toasts: ToastrService) { }

  ngOnInit(): void {
  }

  registrar(){
    this.conta.registrar(this.model).subscribe(resposta => {
      console.log(resposta);
      this.cancelar();
    }, erro => {
      this.toasts.error(erro.error);
    });
  }

  cancelar() {
    console.log('cancelado');
  }

}
