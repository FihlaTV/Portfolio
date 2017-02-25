"use strict";
var styles = require('./styles/site.scss');
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
var core_1 = require("@angular/core");
if (process.env.NODE_ENV == 'production') {
    core_1.enableProdMode();
    console.log('prod!');
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=bootstrap.js.map