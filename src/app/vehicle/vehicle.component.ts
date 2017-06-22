import { Component, OnInit } from '@angular/core';
import {DeliveryService} from "../delivery.service";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-vehicle',
  styleUrls: ['/src/app/vehicle/vehicle.component.css'],
  templateUrl: '/src/app/vehicle/vehicle.component.html'
})
export class VehicleComponent implements OnInit {
  private vehicleModel:VehicleModel;
  private vehicleList:VehicleModel[];
  private edit:boolean;
 
  constructor(private deliveryService:DeliveryService) { }

  ngOnInit() {
    this.vehicleModel=new VehicleModel();
    this.getAllVehicle();
    this.edit=false;
   
  }
getAllVehicle():void{
 this.deliveryService.getAllVehicle().subscribe(
   data=>this.vehicleList=data.json().vehicles
 );
}
postVehicle():void{
 this.deliveryService.postVehicle(this.vehicleModel).subscribe(
   data=>this.getAllVehicle()
 );
}
deleteVehicle(id:number):void{
 this.deliveryService.deleteVehicle(id).subscribe(
   data=>this.getAllVehicle()
 );
}
putButton(vm:VehicleModel):void{
 this.edit=true;
  this.vehicleModel=vm;
}

putVehicle():void{
  this.edit=false;
  this.deliveryService.putVehicle(this.vehicleModel).subscribe(
  data=> this.getAllVehicle()
  );
}


}

export class VehicleModel{
      make: string;
      name: string;
      regsNum: number;
      status: string;
      type: string;
      vehicleId: number;
      vehicleYear: number;
}
