<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php
    session_start();
    if (isset($_GET["akcja"]) && $_GET["akcja"] == "wyloguj") {
        unset($_SESSION["zalogowany"]);
    }
    if (isset($_POST["haslo"]) && $_POST["haslo"] == "tajne") {
        $_SESSION["zalogowany"] = 1;
    }
    if (!isset($_SESSION["zalogowany"])) {
?>
<form action="index.php" method="POST">
    <input type="text" name="haslo">
    <input type="submit" value="ok">
</form>
<?php
    }
    else {
?>
<p>Tajne</p>
<a href="index.php?akcja=wyloguj">Wyloguj</a>
<?php
    }
    if (!isset($_SESSION["licznik"])) {
        $_SESSION["licznik"] = 1;
    }
    else {
        echo("<p>Liczba wizyt: ".$_SESSION["licznik"]++."</p>");
    }
?>
</body>
</html>