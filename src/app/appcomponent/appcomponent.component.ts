import { Component, OnInit } from '@angular/core';
import { Trabajador } from "../modules/trabajador";

@Component({
  selector: 'app-appcomponent',
  templateUrl: './appcomponent.component.html',
  styleUrls: ['./appcomponent.component.css']
})

export class AppcomponentComponent implements OnInit {


  //declarar la variable titulo
  titulo = "Listado de trabajadores";

  //declarar la variable trabajadores array del tipo Trabajador
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
  ]

  borrar(id: number) {
    this.trabajadores.forEach(trabajador => {
      let indexTrabajador;
      if (trabajador.id == id) {
        indexTrabajador = this.trabajadores.indexOf(trabajador);
        this.trabajadores.splice(indexTrabajador, 1);
      }
    });
  }

  sumaVoto(id: number) {
    //He intentado hacerlo con el metodo .find pero no he conseguido que me funcione
    this.trabajadores.forEach(trabajador => {
      if (trabajador.id == id) {
        trabajador.votos += 1;
      }
    });


  }

  restaVoto(id: number) {
    this.trabajadores.forEach(trabajador => {
      if (trabajador.id == id) {
        trabajador.votos -= 1;
      }
    });

  }

  constructor() { }

  ngOnInit(): void {
  }

}







