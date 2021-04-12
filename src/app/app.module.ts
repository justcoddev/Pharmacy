import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Routs/Rutas



//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { InformationComponent } from './components/information/information.component';
import { ServicesinfoComponent } from './components/servicesinfo/servicesinfo.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MapComponent } from './components/map/map.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PromotionsComponent,
    InformationComponent,
    ServicesinfoComponent,
    FooterComponent,
    MapComponent,
    CatalogueComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
