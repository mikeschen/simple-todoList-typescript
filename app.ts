const APIKey = "ddf4617215c851dc1872708540707032";

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

class HttpCall {
    getData(url: string) {
        let promise = new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();

            request.addEventListener('load', function () {
                resolve(JSON.parse(request.responseText));
            })
            request.open('GET', url);
            request.send();
        });

        return promise;
    }
}

let $http = new HttpCall();
$http.getData("http://api.openweathermap.org/data/2.5/weather?API=&APPID=" + APIKey + "&q=Phoenix")
    .then((data) => {
        console.log(data.main.temp);
        document.getElementById("temperture").innerHTML = data.main.temp;
    });
