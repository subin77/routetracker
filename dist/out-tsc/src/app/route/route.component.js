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
var RouteComponent = (function () {
    function RouteComponent(deliveryService) {
        this.deliveryService = deliveryService;
    }
    RouteComponent.prototype.ngOnInit = function () {
        this.routeModel = new RouteModel();
        this.getAllRoute();
        this.edit = false;
    };
    RouteComponent.prototype.getAllRoute = function () {
        var _this = this;
        this.deliveryService.getAllRoute().subscribe(function (data) { return _this.routeList = data.json().routes; });
    };
    RouteComponent.prototype.postRoute = function () {
        var _this = this;
        this.deliveryService.postRoute(this.routeModel).subscribe(function (data) { return _this.getAllRoute(); });
    };
    RouteComponent.prototype.deleteRoute = function (id) {
        var _this = this;
        this.deliveryService.deleteRoute(id).subscribe(function (data) { return _this.getAllRoute(); });
    };
    RouteComponent.prototype.putButton = function (vm) {
        this.edit = true;
        this.routeModel = vm;
    };
    RouteComponent.prototype.putRoute = function () {
        var _this = this;
        this.edit = false;
        this.deliveryService.putRoute(this.routeModel).subscribe(function (data) { return _this.getAllRoute(); });
    };
    return RouteComponent;
}());
RouteComponent = __decorate([
    core_1.Component({
        selector: 'app-route',
        templateUrl: '/src/app/route/route.component.html',
        styleUrls: ['/src/app/route/route.component.css']
    }),
    __metadata("design:paramtypes", [delivery_service_1.DeliveryService])
], RouteComponent);
exports.RouteComponent = RouteComponent;
var RouteModel = (function () {
    function RouteModel() {
    }
    return RouteModel;
}());
exports.RouteModel = RouteModel;
//# sourceMappingURL=route.component.js.map