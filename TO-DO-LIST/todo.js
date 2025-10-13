const tasksExamples = [
    "estudiar JS",
    "descansar",
    "dormir",
    "escuchar al profe"
]
const tasksUL = document.getElementById('tasks');

    // No funcionará a no ser que pongamos los 3 puntitos, ya que .forEach es una función específica de arrays
    /*estos 3 puntitos*/

    //Los elementos de tasksUL, que es un <ul> son <li>, por lo que debo de mostrar todos los hijos de tasksUL, con el 


//Si en la consola F12 del navegador llamamos a la función listTasks();s

function listTasks(){
    return [...tasksUL.children].map(taskLI => taskLI.textContent);
}

function listTasksConsole(tasks){
    tasks.forEach( task => console.log(task));
}

function listTasksAlert(tasks){
    tasks.forEach( task => alert(task));
}

tasks = listTasks();

// listTasksAlert(tasks);
listTasksConsole(tasks);

function insertTasksExamples(tasksExamples){
tasksExamples.forEach( task => insertTask(task));
}

function insertTask(taskText){
    const li = document.createElement('li');
    li.textContent = taskText;
    tasksUL.append(li);
}
insertTasksExamples(tasksExamples);
