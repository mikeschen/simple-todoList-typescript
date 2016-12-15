class Todo {
  task: string;

  constructor(task: string) {
    this.task = task;
  }
}

function addTodo() {
  let input = <HTMLInputElement>document.getElementById("userInput");
  let storedInput = input.value;
  let todo1 = new Todo(storedInput);
  document.getElementById("results").innerHTML += "<li>" + todo1.task + "</li>";
  clearForm();
}

function clearForm() {
  if(document.getElementById) {
    document.form.reset();
  }
}
