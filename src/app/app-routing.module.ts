import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { BannerComponent } from './banner/banner.component';
import { OverviewComponent } from './overview/overview.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { NeighbourhoodComponent } from './neighbourhood/neighbourhood.component';
import { CounterComponent } from './counter/counter.component';
import { SurroundingsComponent } from './surroundings/surroundings.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectConfugurationComponent } from './project-confuguration/project-confuguration.component';

const routes: Routes = [
  // { path:'',component:BannerComponent},
  // {path:'overview',component:OverviewComponent},
  // {path:'enquireNow',component:EnquiryComponent},
  // {path:'amenities',component:AmenitiesComponent},
  // {path:'contact',component:NeighbourhoodComponent},
  // {path:'banner',component:BannerComponent},
  // {path:'counter',component:CounterComponent},
  // {path:'surroundings',component:SurroundingsComponent},
  // {path:'footer',component:FooterComponent},
  // {path:'projectConfiguration',component:ProjectConfugurationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
