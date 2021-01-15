import { Component, OnInit } from '@angular/core';
import { ServicioTrabajadorService } from "../servicios/servicio-trabajador.service";
import { Trabajador } from "../modules/trabajador";

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent implements OnInit {

  titulo: string = "Listado de trabajadores";
  misTrabajadores: Trabajador[] = [];
  totalTrabajadores: any;

  constructor(private miServicioTrabajadores: ServicioTrabajadorService) { }

  ngOnInit(): void {
    this.misTrabajadores = this.miServicioTrabajadores.getTrabajadores();
    this.totalTrabajadores = this.miServicioTrabajadores.getNumero();
  }

  verTotal(){
    alert(this.miServicioTrabajadores.getNumero());
  }

  verTrabajador(trabajador: Trabajador){
    console.log(trabajador);
  }

borrarTrabajador(trabajador:Trabajador){
  this.miServicioTrabajadores.borrarTrabajador(trabajador.id);
}

}
