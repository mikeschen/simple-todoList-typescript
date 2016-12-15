var Todo = (function () {
    function Todo(task) {
        this.task = task;
    }
    return Todo;
}());
function addTodo() {
    var input = document.getElementById("userInput");
    var storedInput = input.value;
    var todo1 = new Todo(storedInput);
    document.getElementById("results").innerHTML += "<li>" + todo1.task + "</li>";
    clearForm();
}
function clearForm() {
    if (document.getElementById) {
        document.form.reset();
    }
}
