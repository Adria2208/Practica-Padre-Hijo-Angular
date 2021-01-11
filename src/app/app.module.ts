import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppcomponentComponent } from './appcomponent/appcomponent.component';
import { CardTrabajadorComponent } from './card-trabajador/card-trabajador.component';

@NgModule({
  declarations: [
    AppComponent,
    AppcomponentComponent,
    CardTrabajadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
