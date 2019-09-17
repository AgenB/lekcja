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
    $conn = new mysqli("172.16.131.125", "02_belica", "6FY6fz9K", "02_belica");
    echo("insert into cars (nazwa, cena, foto, opis, szczegoly, promocja) values ('".$_POST["nazwa"]."', ".$_POST["cena"].", '".$_POST["foto"]."', '".$_POST["opis"]."', '".$_POST["szczegoly"]."', ".$_POST["promocja"].");");
    $sql = "insert into cars (nazwa, cena, foto, opis, szczegoly, promocja) values ('".$_POST["nazwa"]."', ".$_POST["cena"].", '".$_POST["foto"]."', '".$_POST["opis"]."', '".$_POST["szczegoly"]."', ".$_POST["promocja"].");";
    $conn->query($sql);
    $conn->close();
?>
</body>
</html>