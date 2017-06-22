"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./../home/home.component");
var vehicle_component_1 = require("./../vehicle/vehicle.component");
var vehiclelist_component_1 = require("./../vehiclelist/vehiclelist.component");
var route_component_1 = require("./../route/route.component");
var routelist_component_1 = require("./../routelist/routelist.component");
var routes = [
    { path: "home", component: home_component_1.HomeComponent },
    { path: "route", component: route_component_1.RouteComponent },
    { path: "vehicle", component: vehicle_component_1.VehicleComponent },
    { path: "vehiclelist", component: vehiclelist_component_1.VehiclelistComponent },
    { path: "routelist", component: routelist_component_1.RoutelistComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map