import { map, take } from 'rxjs/operators';
import { Usuario } from './../models/usuario';
import { ContaService } from './../services/conta.service';
import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /**
   *
   */
  constructor(private conta: ContaService, private toastr: ToastrService) {


  }
  canActivate(): Observable<boolean> {
    return this.conta.correntUser$.pipe(
      take(1),
      map(correntUser$ => {
        if (correntUser$) {
          return true;
        } else {
          this.toastr.error('Ação não permitida');
          return false;
        }
      }));
  }
}
