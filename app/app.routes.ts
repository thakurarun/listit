import {RouterConfig} from "@angular/router";
import {nsProvideRouter} from "nativescript-angular/router"
import {LoginPage} from "./pages/login/login.component";
import {ListPage} from "./pages/Dashboard/list.component";
import {AuthGuard} from "./auth.gaurd";

export const routes: RouterConfig = [
  { path: "list", component: LoginPage, canActivate: [AuthGuard] },
  { path: "", component: LoginPage }
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, { enableTracing: false }),
  AuthGuard
];