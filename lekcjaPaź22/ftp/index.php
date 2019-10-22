<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Połączenie z bazą</title>
</head>
<body>
    <?php
        include "class.viewusers.php";
        $user = new ViewUsers;
        $user->showAllUsers();
        $user->showUser(10);
    ?>
</body>
</html>