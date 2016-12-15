var MyApp;
(function (MyApp) {
    var Todo = (function () {
        function Todo(task) {
            this.task = task;
        }
        return Todo;
    }());
    MyApp.Todo = Todo;
})(MyApp || (MyApp = {}));
