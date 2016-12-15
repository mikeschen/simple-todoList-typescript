var APIKey = "ddf4617215c851dc1872708540707032";
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
var $http = new HttpCall();
$http.getData("http://api.openweathermap.org/data/2.5/weather?API=&APPID=" + APIKey + "&q=Phoenix")
    .then(function (data) {
    console.log(data.main.temp);
    document.getElementById("temperture").innerHTML = data.main.temp;
});
