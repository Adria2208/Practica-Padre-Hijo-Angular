import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-trabajador',
  templateUrl: './card-trabajador.component.html',
  styleUrls: ['./card-trabajador.component.css']
})
export class CardTrabajadorComponent implements OnInit {

  @Input() trabajadores: any;
  @Input() i:any; //Indice de el bucle *ngFor

  @Output() likeTrabajador = new EventEmitter<number>();
  @Output() unlikeTrabajador = new EventEmitter<number>();
  @Output() borrarTrabajador = new EventEmitter<number>();

  borrar(id:number){
    this.borrarTrabajador.emit(id);
  }

  like(id:number){
    this.likeTrabajador.emit(id);
  }

  unlike(id:number){
    this.unlikeTrabajador.emit(id);
  }

  constructor() { }

  ngOnInit(): void { }

}
