"use strict";
var core_1 = require('@angular/core');
var page_1 = require("ui/page");
var router_deprecated_1 = require("@angular/router-deprecated");
var userModel_1 = require("./../../shared/model/userModel");
var userService_1 = require("./../../shared/services/userService");
var LoginPage = (function () {
    function LoginPage(page, _userService, _router) {
        this.page = page;
        this._userService = _userService;
        this._router = _router;
        this.model = new userModel_1.UserModel();
        this.model.Email = "arun.thakur@mail.com";
    }
    LoginPage.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginPage.prototype.signIn = function () {
        var router = this._router;
        var obs = this._userService.signIn(this.model);
        var subs = obs.subscribe(function (result) {
            console.log("passed..");
            router.navigate(["Dashboard"]);
        }, function (err) { return alert(err); }, function () { });
        obs.connect();
        //.unsubscribe subscriber...
        // .then((data) => {
        //   //user is valid now move to list page
        //   router.navigate(["Dashboard"]);
        // }, (err) => { alert(err); });
    };
    LoginPage = __decorate([
        core_1.Component({
            selector: 'login-control',
            templateUrl: 'pages/Login/login.html',
            providers: [userService_1.UserService],
            styleUrls: ['pages/Login/login-common.css']
        }), 
        __metadata('design:paramtypes', [page_1.Page, userService_1.UserService, router_deprecated_1.Router])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=login.component.js.map