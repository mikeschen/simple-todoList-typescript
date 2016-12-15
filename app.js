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
