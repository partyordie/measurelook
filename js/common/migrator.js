/*Copyright 2016 Timofey Rechkalov <ntsdk@yandex.ru>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
   limitations under the License. */

/*global
 // Utils
 */

"use strict";

(function(exports) {
    
    var exists = function(data, prefix, key){
        console.log(prefix + '.' + key + ': ' + (data[key] !== undefined ? "OK" : "undefined"));
    };
    
    exports.migrate = function(data) {
        if (!data.version) {
            data.version = "0.1.0";
        }
        if(data.version === "0.1.0"){
            data.measuredParams.forEach(el => el.type = 'direct');
            data.version = "0.2.0";
        }
        if(data.version === "0.2.0"){
            data.name = "";
            data.timestamp = "";
            data.version = "0.3.0";
        }
        return data;
    };
    
})(typeof exports === 'undefined' ? this['Migrator'] = {} : exports);
