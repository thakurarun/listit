import {Component} from '@angular/core';
import {Page} from "ui/page";
import {Router} from "@angular/router-deprecated";
import {UserModel} from "./../../shared/model/userModel"
import {UserService} from "./../../shared/services/userService"

@Component({
  selector: 'login-control',
  templateUrl: 'pages/Login/login.html',
  providers: [UserService],
  styleUrls: ['pages/Login/login-common.css']
})
export class LoginPage {
  model: UserModel;
  constructor(private page: Page, private _userService: UserService, private _router: Router) {
    this.model = new UserModel();
    this.model.Email = "arun.thakur@mail.com"
  }
  ngOnInit() {
    this.page.actionBarHidden = true;
  }
  signIn() {
    let router = this._router;
    let obs = this._userService.signIn(this.model);
    let subs = obs.subscribe(
      (result) => {
        console.log("passed..");
        router.navigate(["Dashboard"])
      },
      (err) => alert(err),
      () => { });
    obs.connect();
    //.unsubscribe subscriber...
    // .then((data) => {
    //   //user is valid now move to list page
    //   router.navigate(["Dashboard"]);
    // }, (err) => { alert(err); });
  }
}