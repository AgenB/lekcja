<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Biblioteka - Wyporzyczenia</title>
</head>
<body>
    <?php
    require "class.biblsql.php";
    $sql = new biblsql();

    $arr = array("test"=>"123", "drugi"=>"456");
    echo $arr["test"];
    ?>
</body>
</html>