"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var AdvprojectPage = (function () {
    function AdvprojectPage() {
    }
    AdvprojectPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    AdvprojectPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return AdvprojectPage;
}());
exports.AdvprojectPage = AdvprojectPage;
//# sourceMappingURL=app.po.js.map