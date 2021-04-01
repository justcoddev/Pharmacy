import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { InformationComponent } from './components/information/information.component';
import { ServicesinfoComponent } from './components/servicesinfo/servicesinfo.component';

//rutas, definir objetos con estructuras completas, propiedad path y propiedas (componente que se activará)
const routes: Routes = [
  //Orden de rutas a comprobar para resolver la petición
  { path: '', pathMatch: 'full', redirectTo: 'Information' }, //Patron de rutas para que reconozca cuando ponemos el nombre de lapagina: Ruta raíz, ruta Home
  { path: 'Inicio', redirectTo: 'Home' }, //redirigir a ruta Home
  { path: 'Home', component: HomeComponent },
  { path: 'Servicios', redirectTo: 'Services' }, //redirigir a ruta Services
  { path: 'Services', component: ServicesinfoComponent },
  { path: 'Promociones', redirectTo: 'Promotions' }, //redirigir a ruta Promotions
  { path: 'Promotions', component: PromotionsComponent },
  { path: 'Acerca-de', redirectTo: 'About' }, //redirigir a ruta About
  { path: 'About', component: AboutComponent },
  { path: 'Informacion', redirectTo: 'Information' }, //redirigir a ruta Information
  { path: 'Information', component: InformationComponent },
  { path: '**', redirectTo: 'Information' }, //ruta comodín, recibe cualquier ruta que pase
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
