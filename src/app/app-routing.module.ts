import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorBComponent } from './error-b/error-b.component';
import { InicioBComponent } from './inicio-b/inicio-b.component';
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';

const routes: Routes = [
  { path: '', component: InicioBComponent },
  { path: 'trabajadores', component: TrabajadoresComponent },
  { path: '**', component: ErrorBComponent }


  //app-error-b
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
