"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var itemModel_1 = require('./../../shared/model/incoming/itemModel');
var ListPage = (function () {
    function ListPage(http) {
        this.items = null;
        var self = this;
        self.items = [];
        setInterval(function () {
            var item = new itemModel_1.Item();
            item.ItemName = "Test";
            self.items.push(item);
        }, 3000);
    }
    ListPage = __decorate([
        core_1.Component({
            selector: 'list-conrol',
            templateUrl: "pages/Dashboard/list.html"
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ListPage);
    return ListPage;
}());
exports.ListPage = ListPage;
//# sourceMappingURL=list.component.js.map