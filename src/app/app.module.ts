import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsuariosAdicionadosComponent } from './home/usuarios-adicionados/usuarios-adicionados.component';
import { FormsModule } from '@angular/forms';
import { FormularioUsuariosComponent } from './home/formulario-usuarios/formulario-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuariosAdicionadosComponent,
    FormularioUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
