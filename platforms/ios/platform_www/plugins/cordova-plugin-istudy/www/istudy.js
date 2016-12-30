cordova.define("cordova-plugin-istudy.Istudy", function(require, exports, module) {
/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/



var exec = require('cordova/exec');

var Istudy = {
getSecrityCode: function(successCallback, errorCallback,args) {
     
    exec(successCallback, errorCallback, "Istudy", "getSecrityCode", [args]);
},
getHeader: function(successCallback, errorCallback,args) {
     
    exec(successCallback, errorCallback, "Istudy", "getHeader", [args]);
},
encrypt: function(successCallback, errorCallback, args) {
    
    exec(successCallback, errorCallback, "Istudy", "encrypt", [args]);
},
verify : function(successCallback, errorCallback, args) {

    exec(successCallback, errorCallback, "Istudy", "verify", [args]);
 },
generateMd5:function(successCallback, errorCallback, args) {

    exec(successCallback, errorCallback, "Istudy", "generateMd5", [args]);
 },
 getDeviceInfo:function(successCallback, errorCallback, args) {

    exec(successCallback, errorCallback, "Istudy", "getDeviceInfo", [args]);
 }

// cordova.exec(null, null, 'Service', 'action', [ arg1, arg2 ]);
}

module.exports = Istudy;

});
