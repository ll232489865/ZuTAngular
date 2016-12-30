cordova.define("cordova-plugin-qiniu.Qiniu", function(require, exports, module) {
var exec = require('cordova/exec');

var Qiniu = {

uploadImage: function(successCallback, errorCallback,args) {
     
    exec(successCallback, errorCallback, "Qiniu", "uploadImage", [args]);
}
};

module.exports = Qiniu;


});
