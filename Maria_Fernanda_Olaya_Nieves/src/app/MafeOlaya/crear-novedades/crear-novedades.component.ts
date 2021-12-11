import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicioNovedadService } from '../servicio-novedad.service';

declare var ventana_insertar_con_exito:any;

@Component({
  selector: 'app-crear-novedades',
  templateUrl: './crear-novedades.component.html',
  styleUrls: ['./crear-novedades.component.css']
})
export class CrearNovedadesComponent implements OnInit {
  InfoNovedad=new FormGroup({
    codigo_novedad: new FormControl(''),
    nombre_novedad:new FormControl(''),
    descripcion_novedad:new FormControl('')

  });

  recibir_datos_novedad(){
    let codigo_novedad=this.InfoNovedad.value.codigo_novedad;
    let nombre_novedad=this.InfoNovedad.value.nombre_novedad;
    let descripcion_novedad=this.InfoNovedad.value.descripcion_novedad;

    this.APIService.InsertarNovedad(this.InfoNovedad.value).subscribe(data=>{ventana_insertar_con_exito();/*alert("Novedad agregada exitosamente")*/})
  
  }
  constructor(private APIService: ServicioNovedadService ) { }

  ngOnInit(): void {
  }

}
