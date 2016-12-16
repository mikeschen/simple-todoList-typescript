const APIKEY = "ddf4617215c851dc1872708540707032";

class HttpCall {
  getData(url: string) {
    let promise = new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.addEventListener('load', function () {
        resolve(JSON.parse(request.responseText));
      })
      request.open('GET',url);
      request.send();
    });
    return promise;
  }
}

function addTodo() {
  let input = <HTMLInputElement>document.getElementById("userInput");
  let storedInput = input.value;
  if(storedInput === ""){
    storedInput = "";
    alert("Please Enter A Todo Item!")
  } else {
    let todo1 = new MyApp.Todo(storedInput);
    document.getElementById("results").innerHTML += "<li>" + todo1.task + "</li>";
    clearForm();
  }
}

function clearForm() {
  if(document.getElementById) {
    document.form.reset();
  }
}

function convertToFarenheit(temp) {
  return parseInt(temp * 9/5 - 459.67);
}

let $http = new HttpCall();
$http.getData("http://api.openweathermap.org/data/2.5/weather?API=&APPID=" + APIKEY + "&q=Phoenix")
  .then((data) => {
    console.log(data.main.temp);
    let convertedTemp = convertToFarenheit(data.main.temp);
    document.getElementById("temperature").innerHTML = "Current Temp: " + convertedTemp;
  });
