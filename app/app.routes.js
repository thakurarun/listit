"use strict";
var router_1 = require("nativescript-angular/router");
var login_component_1 = require("./pages/login/login.component");
var auth_gaurd_1 = require("./auth.gaurd");
exports.routes = [
    { path: "list", component: login_component_1.LoginPage, canActivate: [auth_gaurd_1.AuthGuard] },
    { path: "", component: login_component_1.LoginPage }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.nsProvideRouter(exports.routes, { enableTracing: false }),
    auth_gaurd_1.AuthGuard
];
//# sourceMappingURL=app.routes.js.map