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
        $options = ['cost' => 10];
        $hashedPass = password_hash($_GET["password"], PASSWORD_DEFAULT, $options);

        $conn = new mysqli("172.16.131.125", "02_belica", "6FY6fz9K", "02_belica");
        $sql = "insert into proj_users (login, password, permgroup) values ('".$_GET["login"]."', '".$hashedPass."', 1);";
        $conn->query($sql);
        $conn->close();
    ?>
</body>
</html>