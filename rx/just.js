'use strict';

var _rx = require('rx');

_rx.Observable.just(1).subscribe(function (value) {
    return console.log('onNext: ' + value);
}, function (error) {
    return console.log('onError: ' + error);
}, function () {
    return console.log('onCompleted');
});
console.log('created');

//# sourceMappingURL=just.js.map