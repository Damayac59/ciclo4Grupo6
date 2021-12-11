import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EliminarNovedadComponent } from './MafeOlaya/eliminar-novedad/eliminar-novedad.component';
import { CrearNovedadesComponent } from './MafeOlaya/crear-novedades/crear-novedades.component';
const routes: Routes = [
  {path: '', component: CrearNovedadesComponent },
  {path:'eliminar_novedad', component:EliminarNovedadComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
