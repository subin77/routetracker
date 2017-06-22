"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var vehicle_component_1 = require("./vehicle/vehicle.component");
var route_component_1 = require("./route/route.component");
var vehiclelist_component_1 = require("./vehiclelist/vehiclelist.component");
var routelist_component_1 = require("./routelist/routelist.component");
var app_routing_module_1 = require("./app-routing/app-routing.module");
var delivery_service_1 = require("./delivery.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            vehicle_component_1.VehicleComponent,
            route_component_1.RouteComponent,
            vehiclelist_component_1.VehiclelistComponent,
            routelist_component_1.RoutelistComponent
        ],
        imports: [
            platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, http_1.HttpModule, forms_1.FormsModule
        ],
        providers: [delivery_service_1.DeliveryService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map