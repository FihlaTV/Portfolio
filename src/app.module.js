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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var ng2_page_scroll_1 = require("ng2-page-scroll");
var rest_service_1 = require("./services/rest.service");
var app_routing_1 = require("./app.routing");
var _1 = require("./components/");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [_1.AppComponent],
        declarations: [_1.HomeComponent, _1.WorkComponent, _1.NavigationComponent, _1.AppComponent],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            app_routing_1.AppRoutingModule,
            ng2_page_scroll_1.Ng2PageScrollModule.forRoot()
        ],
        providers: [rest_service_1.RestService]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map