import { Component } from '@angular/core';
import { Qiniu } from 'ionic-native';
export var Details = (function () {
    function Details() {
    }
    Details.prototype.uploadImage = function () {
        Qiniu.uploadImage().then(function (Qiniu) {
            alert("七牛");
        });
    };
    Details.decorators = [
        { type: Component, args: [{
                    // moduleId:module.id,
                    selector: "my-component",
                    templateUrl: "discoveryDeatil.html"
                },] },
    ];
    /** @nocollapse */
    Details.ctorParameters = [];
    return Details;
}());
//# sourceMappingURL=discoveryDeatil.js.map