<?php
$conn = new mysqli("172.16.131.125", "z_dfg", "ytr", "z_dfg");
$imie = $_POST["imie"];
$dzial = $_POST["dzial"];
$zarobki = $_POST["zarobki"];
$data = $_POST["data"];
$sql = "insert into pracownicy values(NULL, '$imie', $dzial, $zarobki, '$data');";
echo("Dodano $imie, $dzial, $zarobki, $data<br><a href='index.php'>Powrót</a>");
mysqli_query($conn, $sql);
header("location: index.php");
?>