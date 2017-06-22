import { Component, OnInit } from '@angular/core';
import {DeliveryService} from "../delivery.service";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-routelist',
  templateUrl: 'src/app/routelist/routelist.component.html',
  styleUrls: ['src/app/routelist/routelist.component.css']
})
export class RoutelistComponent implements OnInit {
  private routelistModel:RouteListModel;
  private routeList:RouteListModel[];
  private edit:boolean;
  private searchBy:string;
  private searchValue:string;
  constructor(private deliveryService:DeliveryService) { }

  ngOnInit() {
    this.searchBy="id";
    this.searchValue="";
    this.routelistModel=new RouteListModel();
    this.getAllRoute();
  }
getAllRoute():void{
 this.deliveryService.getAllRoute().subscribe(
   data=>this.routeList=data.json().routes
 );
}
postRoute():void{
 this.deliveryService.postRoute(this.routelistModel).subscribe(
   data=>this.getAllRoute()
 );
}
deleteRoute(id:number):void{
 this.deliveryService.deleteRoute(id).subscribe(
   data=>this.getAllRoute()
 );
}
putButton(vm:RouteListModel):void{
 this.edit=true;
  this.routelistModel=vm;
}

putRoute():void{
  this.edit=false;
  this.deliveryService.putRoute(this.routelistModel).subscribe(
  data=> this.getAllRoute()
  );
}
searchRoute():void{
  this.deliveryService.searchRoute(this.searchBy,this.searchValue).subscribe(
    data => this.routeList = data.json().routes
  )
}
}
export class RouteListModel{
      id:number;
      startDestination: string;
      endDestination: string;
      departTime: string;
      arrivalTime: string;
      routeName:string
      status: string;
}