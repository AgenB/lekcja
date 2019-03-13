<?php
$conn = new mysqli("localhost", "root", "", "root");
$imie = $_POST["imie"];
$nazwisko = $_POST["nazwisko"];
$zarobki = $_POST["zarobki"];
$sql = "insert into tabela values(NULL, '$imie', '$nazwisko', $zarobki);";
mysqli_query($conn, $sql);
echo("<br><a href='index.php'>Powrot</a>");
?>