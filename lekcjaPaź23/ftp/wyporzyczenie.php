<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Biblioteka - Wyporzyczenia</title>
    <link rel="stylesheet" href="wyporzyczenie.css" class="css">
</head>
<body>
    <?php
    session_start();
    ?>
    <?php
    require "class.biblsql.php";
    $bibl = new biblsql();
    var_dump($bibl->searchBooks(""));
    ?>
    <div class="container">
    
    </div>
</body>
</html>