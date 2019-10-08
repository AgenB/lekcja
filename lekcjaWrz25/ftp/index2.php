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
            <?php
                if (isset($_SESSION["zalogowany"]) && $_SESSION["zalogowany"] == 1) {
                    $conn = new mysqli("172.16.131.125", "02_belica", "6FY6fz9K", "02_belica");
                    $sql = "SELECT roles.role, permissions.permission FROM users INNER JOIN roles ON users.id_role=roles.id_role INNER JOIN role_permission ON roles.id_role=role_permission.id_role INNER JOIN permissions ON role_permission.id_perm=permissions.id_perm WHERE users.username like '".$_SESSION["username"]."'";
                    $result1 = $conn -> query($sql);
                        while($row = $result1 -> fetch_assoc()) {
                            echo($row["role"]);
                        }
                    $conn->close();
                }
                else {
                    echo("<h1>Nie jesteś zalogowany :c</h1>");
                }
            ?>
        </div>
    </div>
</body>
</html>