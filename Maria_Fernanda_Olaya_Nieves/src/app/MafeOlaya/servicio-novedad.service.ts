import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModuloNov } from './modulo-nov';


@Injectable({
  providedIn: 'root'
})
export class ServicioNovedadService {
//con la url me va a almacenar los datos en el backend
  URL_viaje='http://localhost/Grupo6/API/crud/Insertarnovedad.php';

  constructor(private http:HttpClient) { }
  InsertarNovedad(novedad:ModuloNov){

    //alert("llego al servicio" + JSON.stringify(novedad));

    return this.http.post<ModuloNov>(this.URL_viaje,novedad);
  }
  
}
