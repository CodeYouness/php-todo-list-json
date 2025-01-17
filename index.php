<?php

$todolist = json_decode(file_get_contents('./src/db.json'), true);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./src/style.css">
    <title>ToDoList</title>
</head>

<body>
    <main id="app">
        <h1>ToDoList</h1>
        <ul>
            <li v-for="(task,index) in toDoList">
                {{task.task}}
            </li>
        </ul>
        <input type="text" name="newTask" id="newTask" @keyup.enter="addTask(newTask)" v-model="newTask">


    </main>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.7.2/axios.min.js"
        integrity="sha512-JSCFHhKDilTRRXe9ak/FJ28dcpOJxzQaCd3Xg8MyF6XFjODhy/YMCM8HW0TFDckNHWUewW+kfvhin43hKtJxAw=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="./src/script.js"></script>
</body>

</html>