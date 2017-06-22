import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import{VehicleModel}from'./vehicle/vehicle.component';
import{RouteModel} from'./route/route.component';
import{VehicleListModel} from'./vehiclelist/vehiclelist.component';
import{RouteListModel} from'./routelist/routelist.component';
@Injectable()
export class DeliveryService {
  private vehicleURL:string="http://localhost:2222/adv-project/vehicle";
  private routeURL:string="http://localhost:2222/adv-project/route";

  constructor(private http:Http) { }
  getAllVehicle():Observable<Response>{
   return this.http.get(this.vehicleURL+"/getAll");
  }
  postVehicle(vehicleModel:VehicleModel):Observable<Response>{
  return this.http.post(this.vehicleURL+"/insert",vehicleModel);
  }
  deleteVehicle(id:number):Observable<Response>{
    return this.http.delete(this.vehicleURL+"/"+id)
  }
  searchVehicleByName(search:string):Observable<Response>{
    return this.http.delete(this.vehicleURL+"/searchVehicleByName")
  }
  putVehicle(vehicleModel:VehicleModel):Observable<Response>{
    return this.http.put(this.vehicleURL+"/update",VehicleModel)
  }

  searchVehicle(searchBy:string, searchValue:string){
    return this.http.get(this.vehicleURL+"/"+searchBy+"?"+searchBy+"="+searchValue);
  }

  getAllRoute():Observable<Response>{
   return this.http.get(this.routeURL+"/getAll");
  }
  postRoute(routeModel:RouteModel):Observable<Response>{
  return this.http.post(this.routeURL+"/insert",routeModel);
  }
  deleteRoute(id:number):Observable<Response>{
    return this.http.delete(this.routeURL+"/"+id)
  }
  putRoute(routeModel:RouteModel):Observable<Response>{
    return this.http.put(this.routeURL+"/update",routeModel)
  }
  searchRoute(searchBy:string, searchValue:string){
    return this.http.get(this.routeURL+"/"+searchBy+"?"+searchBy+"="+searchValue);
  }
}
