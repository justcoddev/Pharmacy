import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Routs/Rutas

//Services/Servicios

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { InformationComponent } from './components/information/information.component';
import { ServicesinfoComponent } from './components/servicesinfo/servicesinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PromotionsComponent,
    InformationComponent,
    ServicesinfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
