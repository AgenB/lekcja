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
    $_SESSION["test"] = "test";
    if (isset($_GET["akcja"]) && $_GET["akcja"] == "wyloguj") {
        unset($_SESSION["zalogowany"]);
    }
?>
<form action="index2.php" method="POST">
    <input type="text" name="haslo">
    <input type="submit" value="ok">
</form>
</body>
</html>