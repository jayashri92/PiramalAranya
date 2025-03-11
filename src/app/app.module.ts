import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { ProjectConfugurationComponent } from './project-confuguration/project-confuguration.component';
import { OverviewComponent } from './overview/overview.component';
import { CounterComponent } from './counter/counter.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { SurroundingsComponent } from './surroundings/surroundings.component';
import { NeighbourhoodComponent } from './neighbourhood/neighbourhood.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ProjectConfugurationComponent,
    OverviewComponent,
    CounterComponent,
    AmenitiesComponent,
    SurroundingsComponent,
    NeighbourhoodComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
