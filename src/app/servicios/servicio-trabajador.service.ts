import { Injectable } from '@angular/core';
import { Trabajador } from "../modules/trabajador";
@Injectable({
  providedIn: 'root'
})

export class ServicioTrabajadorService {
  trabajadores: Trabajador[] = [
    {
      id: 1,
      nombre: 'Ana',
      cargo: 'Programadora',
      foto: '1.jpg',
      votos: 0
    },
    {
      id: 2,
      nombre: 'Elena',
      cargo: 'Administrativa',
      foto: '2.jpg',
      votos: 0
    },
    {
      id: 3,
      nombre: 'Juan',
      cargo: 'Analista',
      foto: '3.jpg',
      votos: 0
    },
    {
      id: 4,
      nombre: 'Luis',
      cargo: 'Programador',
      foto: '4.jpg',
      votos: 0
    },
    {
      id: 5,
      nombre: 'Maria',
      cargo: 'Diseñadora',
      foto: '5.jpg',
      votos: 0
    },
    {
      id: 6,
      nombre: 'Pedro',
      cargo: 'Marketing',
      foto: '6.jpg',
      votos: 0
    }
  ];
  misTrabajadores: any;

  getTrabajadores(){
    return this.trabajadores;
  }

  getNumero(){
    return this.trabajadores.length;
  }

  borrarTrabajador(id:number){
    let pos=this.misTrabajadores.findIndex(t=>t.id==id);
    this.misTrabajadores.splice(pos,1);
  }
  constructor() { }
}
