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
var delivery_service_1 = require("../delivery.service");
require("rxjs/add/operator/map");
var VehicleComponent = (function () {
    function VehicleComponent(deliveryService) {
        this.deliveryService = deliveryService;
    }
    VehicleComponent.prototype.ngOnInit = function () {
        this.vehicleModel = new VehicleModel();
        this.getAllVehicle();
        this.edit = false;
    };
    VehicleComponent.prototype.getAllVehicle = function () {
        var _this = this;
        this.deliveryService.getAllVehicle().subscribe(function (data) { return _this.vehicleList = data.json().vehicles; });
    };
    VehicleComponent.prototype.postVehicle = function () {
        var _this = this;
        this.deliveryService.postVehicle(this.vehicleModel).subscribe(function (data) { return _this.getAllVehicle(); });
    };
    VehicleComponent.prototype.deleteVehicle = function (id) {
        var _this = this;
        this.deliveryService.deleteVehicle(id).subscribe(function (data) { return _this.getAllVehicle(); });
    };
    VehicleComponent.prototype.putButton = function (vm) {
        this.edit = true;
        this.vehicleModel = vm;
    };
    VehicleComponent.prototype.putVehicle = function () {
        var _this = this;
        this.edit = false;
        this.deliveryService.putVehicle(this.vehicleModel).subscribe(function (data) { return _this.getAllVehicle(); });
    };
    return VehicleComponent;
}());
VehicleComponent = __decorate([
    core_1.Component({
        selector: 'app-vehicle',
        styleUrls: ['/src/app/vehicle/vehicle.component.css'],
        templateUrl: '/src/app/vehicle/vehicle.component.html'
    }),
    __metadata("design:paramtypes", [delivery_service_1.DeliveryService])
], VehicleComponent);
exports.VehicleComponent = VehicleComponent;
var VehicleModel = (function () {
    function VehicleModel() {
    }
    return VehicleModel;
}());
exports.VehicleModel = VehicleModel;
//# sourceMappingURL=vehicle.component.js.map