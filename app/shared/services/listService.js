"use strict";
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var Rx_1 = require("rxjs/Rx");
var ListService = (function () {
    function ListService(http) {
        this.http = http;
    }
    ListService.prototype.getItems = function () {
        var self = this;
        var obs = Rx_1.Observable.create(function (observer) {
            return self.http.get('http://localhost:5858/api/items')
                .map(function (x) { return x.json().data.data; });
        });
        return obs.publish();
    };
    ListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ListService);
    return ListService;
}());
exports.ListService = ListService;
//# sourceMappingURL=listService.js.map