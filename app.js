var APIKEY = "ddf4617215c851dc1872708540707032";
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
function addTodo() {
    var input = document.getElementById("userInput");
    var storedInput = input.value;
    if (storedInput === "") {
        storedInput = "";
        alert("Please Enter A Todo Item!");
    }
    else {
        var todo1 = new MyApp.Todo(storedInput);
        document.getElementById("results").innerHTML += "<li>" + todo1.task + "</li>";
        clearForm();
    }
}
function clearForm() {
    if (document.getElementById) {
        document.form.reset();
    }
}
function convertToFarenheit(temp) {
    return parseInt(temp * 9 / 5 - 459.67);
}
var $http = new HttpCall();
$http.getData("http://api.openweathermap.org/data/2.5/weather?API=&APPID=" + APIKEY + "&q=Phoenix")
    .then(function (data) {
    console.log(data.main.temp);
    var convertedTemp = convertToFarenheit(data.main.temp);
    document.getElementById("temperature").innerHTML = "Current Temp: " + convertedTemp;
});
