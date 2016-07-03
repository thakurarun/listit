"use strict";
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.signIn = function (user) {
        var obs = Rx_1.Observable.create(function (observer) {
            if (user.Email == "arun.thakur@mail.com" && user.Password == "123456") {
                observer.next(true);
            }
            else {
                observer.error("Invalid Credentials");
            }
            observer.complete();
            //return () => { console.log("disposable called..."); }; //dispose observable
        });
        return obs.publish();
        // return new Promise((resolve, reject) => {
        //   if (user.Email == "arun.thakur@mail.com" && user.Password == "123456") {
        //     resolve(true);
        //   } else {
        //     reject("Invalid credentials");
        //   }
        // });
    };
    UserService.prototype.register = function (user) {
        alert("About to register: " + user.Email);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map