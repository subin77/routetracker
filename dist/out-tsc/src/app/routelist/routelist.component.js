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
var RoutelistComponent = (function () {
    function RoutelistComponent(deliveryService) {
        this.deliveryService = deliveryService;
    }
    RoutelistComponent.prototype.ngOnInit = function () {
        this.searchBy = "id";
        this.searchValue = "";
        this.routelistModel = new RouteListModel();
        this.getAllRoute();
    };
    RoutelistComponent.prototype.getAllRoute = function () {
        var _this = this;
        this.deliveryService.getAllRoute().subscribe(function (data) { return _this.routeList = data.json().routes; });
    };
    RoutelistComponent.prototype.postRoute = function () {
        var _this = this;
        this.deliveryService.postRoute(this.routelistModel).subscribe(function (data) { return _this.getAllRoute(); });
    };
    RoutelistComponent.prototype.deleteRoute = function (id) {
        var _this = this;
        this.deliveryService.deleteRoute(id).subscribe(function (data) { return _this.getAllRoute(); });
    };
    RoutelistComponent.prototype.putButton = function (vm) {
        this.edit = true;
        this.routelistModel = vm;
    };
    RoutelistComponent.prototype.putRoute = function () {
        var _this = this;
        this.edit = false;
        this.deliveryService.putRoute(this.routelistModel).subscribe(function (data) { return _this.getAllRoute(); });
    };
    RoutelistComponent.prototype.searchRoute = function () {
        var _this = this;
        this.deliveryService.searchRoute(this.searchBy, this.searchValue).subscribe(function (data) { return _this.routeList = data.json().routes; });
    };
    return RoutelistComponent;
}());
RoutelistComponent = __decorate([
    core_1.Component({
        selector: 'app-routelist',
        templateUrl: 'src/app/routelist/routelist.component.html',
        styleUrls: ['src/app/routelist/routelist.component.css']
    }),
    __metadata("design:paramtypes", [delivery_service_1.DeliveryService])
], RoutelistComponent);
exports.RoutelistComponent = RoutelistComponent;
var RouteListModel = (function () {
    function RouteListModel() {
    }
    return RouteListModel;
}());
exports.RouteListModel = RouteListModel;
//# sourceMappingURL=routelist.component.js.map