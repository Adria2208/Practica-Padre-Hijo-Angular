import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppcomponentComponent } from './appcomponent/appcomponent.component';
import { CardTrabajadorComponent } from './card-trabajador/card-trabajador.component';
import { ServicioTrabajadorService } from "./servicios/servicio-trabajador.service";
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';

@NgModule({
  declarations: [
    AppComponent,
    AppcomponentComponent,
    CardTrabajadorComponent,
    TrabajadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServicioTrabajadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
