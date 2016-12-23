import { Component } from '@angular/core';
import { Camera } from 'ionic-native';
import { ImagePicker } from 'ionic-native';
export var Details = (function () {
    function Details() {
    }
    Details.prototype.clickCamera = function () {
        Camera.getPicture().then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            alert("打开相机成功了");
            // let base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
            alert("打开相机失败了");
        });
    };
    Details.prototype.imagePicker = function () {
        ImagePicker.getPictures({}).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
                alert('Image URI: ' + results[i]);
            }
        }, function (err) {
            alert("选择图片失败");
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