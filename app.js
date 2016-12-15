var Todo = (function () {
    function Todo(task) {
        this.task = task;
    }
    return Todo;
}());
function addTodo() {
    console.log("function activated");
    var input = document.getElementById("userInput");
    console.log("This is the user input: ", input);
    var storedInput = input.value;
    console.log("This is input.value: ", storedInput);
}
