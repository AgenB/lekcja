<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document 1</title>
    <link rel="stylesheet" href="style.css" class="css">
</head>
<body>
    <div class="container">
        <div class="sidebar">
            <ul>
                <li><a href="index.php">plik 1</a></li>
                <li><a href="index2.php">plik 2</a></li>
                <li><a href="index3.php">plik 3</a></li>
            </ul>
        </div>
        <div class="loginMenu">
            <?php
                require("login.php");
            ?>
        </div>
        <div class="content">
            <h1 class="<?php require("color.php"); ?>">Plik 3</h1>
        </div>
    </div>
</body>
</html>