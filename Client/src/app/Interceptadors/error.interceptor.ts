
import {  NavigationExtras, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private rotas: Router, private toastr: ToastrService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        if (error) {
          console.log(error);
          switch (error.status) {
            case 400:
              if (error.error.errors) {
                const modelStateErrors = [];
                for (const key in error.error.errors) {
                  if (error.error.errors[key]){

                    modelStateErrors.push(error.error.errors[key]);
                  }
                }
                throw modelStateErrors.flat();
              } else {
               this.toastr.error(error.statusText, error.status);
              }
              break;
            case 401:
              this.toastr.error(error.error, error.status);
              break;
              case 404:
              this.rotas.navigateByUrl('/not-found');
              break;
              case 500:
              const navigationEstras: NavigationExtras = {state: {error: error.error}};
              this.rotas.navigateByUrl('/server-error', navigationEstras);
              break;
            default:
              this.toastr.error('Erro inesperado');
              console.log(error);
              break;
          }
        }
        return throwError(error);
      })
    );
  }
}
