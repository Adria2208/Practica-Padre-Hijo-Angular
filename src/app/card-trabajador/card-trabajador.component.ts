import { Component, OnInit, Input } from '@angular/core';
import { Trabajador } from "../modules/trabajador";

@Component({
  selector: 'app-card-trabajador',
  templateUrl: './card-trabajador.component.html',
  styleUrls: ['./card-trabajador.component.css']
})
export class CardTrabajadorComponent implements OnInit {

  @Input() trabajadores: any;
  @Input() i:any;


  constructor() {
    
  }

  ngOnInit(): void {





  }

}
