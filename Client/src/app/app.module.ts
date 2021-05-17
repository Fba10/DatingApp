import { SharedModule } from './modules/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavComponent } from './barra-nav/barra-nav.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FormRegistrarComponent } from './form-registrar/form-registrar.component';
import { ListaMembroComponent } from './membros/lista-membro/lista-membro.component';
import { ListasComponent } from './listas/listas.component';
import { MessagensComponent } from './messagens/messagens.component';
import { MembrosComponent } from './membros/membros.component';
import { DetalhesMembroComponent } from './membros/detalhes-membro/detalhes-membro.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    HomeComponent,
    FormRegistrarComponent,
    ListaMembroComponent,
    DetalhesMembroComponent,
    ListasComponent,
    MessagensComponent,
    MembrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
