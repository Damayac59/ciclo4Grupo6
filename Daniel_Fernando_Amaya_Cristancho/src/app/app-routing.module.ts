import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './daniel/pagina-principal/pagina-principal.component'
import { InformeEmpleadosComponent } from './daniel/informe-empleados/informe-empleados.component'
const routes: Routes = [
  {path: '', component:PaginaPrincipalComponent},
  {path: 'pagina_principal', component:PaginaPrincipalComponent},
  {path: 'informe_empleados', component:InformeEmpleadosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
