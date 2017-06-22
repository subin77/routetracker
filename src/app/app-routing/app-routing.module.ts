import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './../home/home.component';
import { VehicleComponent } from './../vehicle/vehicle.component';
import { VehiclelistComponent } from './../vehiclelist/vehiclelist.component';
import { RouteComponent } from './../route/route.component';
import { RoutelistComponent } from './../routelist/routelist.component';

const routes : Routes = [
    {path:"home",component:HomeComponent},
    {path:"route",component:RouteComponent},
    {path:"vehicle",component:VehicleComponent},
    {path:"vehiclelist",component:VehiclelistComponent},
    {path:"routelist",component:RoutelistComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
