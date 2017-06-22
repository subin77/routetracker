import { Component, OnInit } from '@angular/core';
import{DeliveryService} from '../delivery.service';
import'rxjs/add/operator/map';

@Component({
  selector: 'app-route',
  templateUrl: '/src/app/route/route.component.html',
  styleUrls: ['/src/app/route/route.component.css']
})
export class RouteComponent implements OnInit {
  private routeModel:RouteModel;
  private routeList:RouteModel[];
  private edit:boolean;
  constructor(private deliveryService:DeliveryService) { }

  ngOnInit() {
    this.routeModel=new RouteModel();
    this.getAllRoute();
    this.edit=false;
  }
getAllRoute():void{
 this.deliveryService.getAllRoute().subscribe(
   data=>this.routeList=data.json().routes
 );
}
postRoute():void{
 this.deliveryService.postRoute(this.routeModel).subscribe(
   data=>this.getAllRoute()
 );
}
deleteRoute(id:number):void{
 this.deliveryService.deleteRoute(id).subscribe(
   data=>this.getAllRoute()
 );
}
putButton(vm:RouteModel):void{
 this.edit=true;
  this.routeModel=vm;
}

putRoute():void{
  this.edit=false;
  this.deliveryService.putRoute(this.routeModel).subscribe(
  data=> this.getAllRoute()
  );
}
}

export class RouteModel{
      id:number;
      startDestination: string;
      endDestination: string;
      departTime: string;
      arrivalTime: string;
      routeName:string
      status: string;
}