import { Component, OnInit } from '@angular/core';
import {DeliveryService} from "../delivery.service";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-vehiclelist',
  templateUrl: '/src/app/vehiclelist/vehiclelist.component.html',
  styleUrls: ['/src/app/vehiclelist/vehiclelist.component.css']
})
export class VehiclelistComponent implements OnInit {
  private vehiclelistModel:VehicleListModel;
  private vehicleList:VehicleListModel[];
  private edit:boolean;
  private searchBy:string;
  private searchValue:string;
  
  
  constructor(private deliveryService:DeliveryService) { }

  ngOnInit() {
    this.searchBy="id";
    this.searchValue="";
    this.vehiclelistModel=new VehicleListModel();
    this.getAllVehicle();
    this.edit=false;
}

getAllVehicle():void{
 this.deliveryService.getAllVehicle().subscribe(
   data=>this.vehicleList=data.json().vehicles
 );
}
deleteVehicle(id:number):void{
 this.deliveryService.deleteVehicle(id).subscribe(
   data=>this.getAllVehicle()
 );
}
putButton(vm:VehicleListModel):void{
 this.edit=true;
  this.vehiclelistModel=vm;
}

putVehicle():void{
  this.edit=false;
  this.deliveryService.putVehicle(this.vehiclelistModel).subscribe(
  data=> this.getAllVehicle()
  );
}

searchVehicle():void{
  this.deliveryService.searchVehicle(this.searchBy,this.searchValue).subscribe(
    data => this.vehicleList = data.json().vehicles
  )
}
}
export class VehicleListModel{
      make: string;
      name: string;
      regsNum: number;
      status: string;
      type: string;
      vehicleId: number;
      vehicleYear: number;
}