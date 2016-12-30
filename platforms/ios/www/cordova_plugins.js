cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-console/www/console-via-logger.js",
        "id": "cordova-plugin-console.console",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "console"
        ]
    },
    {
        "file": "plugins/cordova-plugin-console/www/logger.js",
        "id": "cordova-plugin-console.logger",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "cordova.logger"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/ionic-plugin-keyboard/www/ios/keyboard.js",
        "id": "ionic-plugin-keyboard.keyboard",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-istudy/www/istudy.js",
        "id": "cordova-plugin-istudy.Istudy",
        "pluginId": "cordova-plugin-istudy",
<<<<<<< HEAD
        "clobbers": [
            "Istudy"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "id": "cordova-plugin-camera.Camera",
        "pluginId": "cordova-plugin-camera",
=======
>>>>>>> 7e1ee3ad5f2d80df1c3375b98f8d9f28309dda86
        "clobbers": [
            "Istudy"
        ]
    },
    {
        "file": "plugins/cordova-plugin-qiniu/www/qiniu.js",
        "id": "cordova-plugin-qiniu.Qiniu",
        "pluginId": "cordova-plugin-qiniu",
        "clobbers": [
            "Qiniu"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-console": "1.0.4",
    "cordova-plugin-device": "1.1.3",
    "cordova-plugin-splashscreen": "4.0.0",
    "cordova-plugin-statusbar": "2.2.0",
    "cordova-plugin-whitelist": "1.3.0",
    "ionic-plugin-keyboard": "2.2.1",
<<<<<<< HEAD
    "cordova-plugin-istudy": "1.0.0",
    "cordova-plugin-compat": "1.1.0",
    "cordova-plugin-camera": "2.3.1",
    "com.synconset.imagepicker": "2.1.7",
    "cordova-plugin-qiniu": "1.0.0"
=======
    "cordova-plugin-istudy": "1.0.0"
>>>>>>> 7e1ee3ad5f2d80df1c3375b98f8d9f28309dda86
}
// BOTTOM OF METADATA
});