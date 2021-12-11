import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformeEmpleadosComponent } from './daniel/informe-empleados/informe-empleados.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginaPrincipalComponent } from './daniel/pagina-principal/pagina-principal.component';
import { Pagina404Component } from './daniel/pagina404/pagina404.component';

@NgModule({
  declarations: [
    AppComponent,
    InformeEmpleadosComponent,
    PaginaPrincipalComponent,
    Pagina404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
