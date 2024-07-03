<?php 

header('Content-Type: application/json');
$todolist = file_get_contents('./db.json');
echo $todolist;

?>