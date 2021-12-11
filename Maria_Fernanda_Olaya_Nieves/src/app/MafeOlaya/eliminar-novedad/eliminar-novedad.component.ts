import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicioNovedadService } from '../servicio-novedad.service';

declare var ventana_eliminar_con_exito:any;

@Component({
  selector: 'app-eliminar-novedad',
  templateUrl: './eliminar-novedad.component.html',
  styleUrls: ['./eliminar-novedad.component.css']
})
export class EliminarNovedadComponent implements OnInit {
  InfoNovedad=new FormGroup({
    codigo_novedad:new FormControl(''),
  });
  recibir_datos_novedad(){
    let codigo_novedad=this.InfoNovedad.value.codigo_novedad;
    
    this.APIService.EliminarNovedad(codigo_novedad).subscribe(data=>{ventana_eliminar_con_exito();/*alert("Novedad eliminaada exitosamente")*/})

  }
  constructor(private APIService: ServicioNovedadService) { }

  ngOnInit(): void {
  }

}
