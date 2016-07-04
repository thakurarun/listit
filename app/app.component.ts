import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from '@angular/router';
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
@Component({
  selector: "main",
  styleUrls: ["app.css"],
  directives: [NS_ROUTER_DIRECTIVES],
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {

}