"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var vehicle_component_1 = require("./vehicle/vehicle.component");
var DeliveryService = (function () {
    function DeliveryService(http) {
        this.http = http;
        this.vehicleURL = "http://localhost:2222/adv-project/vehicle";
        this.routeURL = "http://localhost:2222/adv-project/route";
    }
    DeliveryService.prototype.getAllVehicle = function () {
        return this.http.get(this.vehicleURL + "/getAll");
    };
    DeliveryService.prototype.postVehicle = function (vehicleModel) {
        return this.http.post(this.vehicleURL + "/insert", vehicleModel);
    };
    DeliveryService.prototype.deleteVehicle = function (id) {
        return this.http.delete(this.vehicleURL + "/" + id);
    };
    DeliveryService.prototype.searchVehicleByName = function (search) {
        return this.http.delete(this.vehicleURL + "/searchVehicleByName");
    };
    DeliveryService.prototype.putVehicle = function (vehicleModel) {
        return this.http.put(this.vehicleURL + "/update", vehicle_component_1.VehicleModel);
    };
    DeliveryService.prototype.searchVehicle = function (searchBy, searchValue) {
        return this.http.get(this.vehicleURL + "/" + searchBy + "?" + searchBy + "=" + searchValue);
    };
    DeliveryService.prototype.getAllRoute = function () {
        return this.http.get(this.routeURL + "/getAll");
    };
    DeliveryService.prototype.postRoute = function (routeModel) {
        return this.http.post(this.routeURL + "/insert", routeModel);
    };
    DeliveryService.prototype.deleteRoute = function (id) {
        return this.http.delete(this.routeURL + "/" + id);
    };
    DeliveryService.prototype.putRoute = function (routeModel) {
        return this.http.put(this.routeURL + "/update", routeModel);
    };
    DeliveryService.prototype.searchRoute = function (searchBy, searchValue) {
        return this.http.get(this.routeURL + "/" + searchBy + "?" + searchBy + "=" + searchValue);
    };
    return DeliveryService;
}());
DeliveryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DeliveryService);
exports.DeliveryService = DeliveryService;
//# sourceMappingURL=delivery.service.js.map