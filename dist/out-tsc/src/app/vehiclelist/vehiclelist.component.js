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
var VehiclelistComponent = (function () {
    function VehiclelistComponent(deliveryService) {
        this.deliveryService = deliveryService;
    }
    VehiclelistComponent.prototype.ngOnInit = function () {
        this.searchBy = "id";
        this.searchValue = "";
        this.vehiclelistModel = new VehicleListModel();
        this.getAllVehicle();
        this.edit = false;
    };
    VehiclelistComponent.prototype.getAllVehicle = function () {
        var _this = this;
        this.deliveryService.getAllVehicle().subscribe(function (data) { return _this.vehicleList = data.json().vehicles; });
    };
    VehiclelistComponent.prototype.deleteVehicle = function (id) {
        var _this = this;
        this.deliveryService.deleteVehicle(id).subscribe(function (data) { return _this.getAllVehicle(); });
    };
    VehiclelistComponent.prototype.putButton = function (vm) {
        this.edit = true;
        this.vehiclelistModel = vm;
    };
    VehiclelistComponent.prototype.putVehicle = function () {
        var _this = this;
        this.edit = false;
        this.deliveryService.putVehicle(this.vehiclelistModel).subscribe(function (data) { return _this.getAllVehicle(); });
    };
    VehiclelistComponent.prototype.searchVehicle = function () {
        var _this = this;
        this.deliveryService.searchVehicle(this.searchBy, this.searchValue).subscribe(function (data) { return _this.vehicleList = data.json().vehicles; });
    };
    return VehiclelistComponent;
}());
VehiclelistComponent = __decorate([
    core_1.Component({
        selector: 'app-vehiclelist',
        templateUrl: '/src/app/vehiclelist/vehiclelist.component.html',
        styleUrls: ['/src/app/vehiclelist/vehiclelist.component.css']
    }),
    __metadata("design:paramtypes", [delivery_service_1.DeliveryService])
], VehiclelistComponent);
exports.VehiclelistComponent = VehiclelistComponent;
var VehicleListModel = (function () {
    function VehicleListModel() {
    }
    return VehicleListModel;
}());
exports.VehicleListModel = VehicleListModel;
//# sourceMappingURL=vehiclelist.component.js.map