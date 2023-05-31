<?php
$a = $_POST['a'];
$b = $_POST['b'];

$data = "Name: $a\nGmail: $b\n";

$file = fopen('history.txt', 'a');
fseek($file, 0, SEEK_END);
fwrite($file, $data);
fclose($file);
?>