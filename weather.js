var MyApp;
(function (MyApp) {
    var HttpCall = (function () {
        function HttpCall() {
        }
        HttpCall.prototype.getData = function (url) {
            var promise = new Promise(function (resolve, reject) {
                var request = new XMLHttpRequest();
                request.addEventListener('load', function () {
                    resolve(JSON.parse(request.responseText));
                });
                request.open('GET', url);
                request.send();
            });
            return promise;
        };
        return HttpCall;
    }());
    MyApp.HttpCall = HttpCall;
})(MyApp || (MyApp = {}));
