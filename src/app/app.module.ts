import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { RouteComponent } from './route/route.component';
import { VehiclelistComponent } from './vehiclelist/vehiclelist.component';
import { RoutelistComponent } from './routelist/routelist.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {DeliveryService} from "./delivery.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VehicleComponent,
    RouteComponent,
    VehiclelistComponent,
    RoutelistComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpModule,FormsModule
  ],
  providers: [DeliveryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
