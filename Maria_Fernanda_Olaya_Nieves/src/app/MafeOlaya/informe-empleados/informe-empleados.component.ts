import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

declare var idusuario_vali:any;
declare var idusuario1:any;

@Component({
  selector: 'app-informe-empleados',
  templateUrl: './informe-empleados.component.html',
  styleUrls: ['./informe-empleados.component.css']
})
export class InformeEmpleadosComponent implements OnInit {
  //atributos
  idusuario1="";

  datoformulario =new FormGroup({
    idusuario: new FormControl(''),


  });

  recoger_datos(){
    let idusuario = this.datoformulario.value.idusuario;
    alert(idusuario);
    let retorno_vali= idusuario_vali(idusuario);
    this.idusuario1=retorno_vali;

  }
  traer_todos(){
    alert("todos");


  }
  constructor() { }

  ngOnInit(): void {
  }

  
}
