import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import {RegionsComponent} from "./Components/regions/regions.component";
import {ReservationsComponent} from "./Components/reservations/reservations.component";

const routes: Routes = [
  {path:"",redirectTo:"Welcome",pathMatch:"full"},
  {
    path: 'Welcome',
    component: HomeComponent
  },
  {
    path: 'Regions',
    component: RegionsComponent
  },
  { path: 'Reservations', component: ReservationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
