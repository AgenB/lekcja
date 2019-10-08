<?php
    session_start();
    $userExists = true;
    $badPassword = false;
    if (isset($_GET["akcja"]) && $_GET["akcja"] == "wyloguj" && isset($_SESSION["zalogowany"])) {
        unset($_SESSION["zalogowany"]);
        unset($_SESSION["username"]);
    }
    if (isset($_POST["username"])) {
        $conn = new mysqli("172.16.131.125", "02_belica", "6FY6fz9K", "02_belica");
        $sql1 = "select username, password from users where username = '".$_POST["username"]."';";
        $result1 = $conn -> query($sql1);
        if ($result1->num_rows == 0) {
            $userExists = false;
        }
        else {
            while($row = $result1 -> fetch_assoc()) {
                if (password_verify($_POST["password"], $row["password"])) {
                    $_SESSION["zalogowany"] = 1;
                    $_SESSION["username"] = $row["username"];
                }
                else {
                    $badPassword = true;
                }
            }
        }
        $conn->close();
    }
    if (isset($_SESSION["zalogowany"]) && $_SESSION["zalogowany"] == 1) {
        echo("<a href='".$_SERVER["PHP_SELF"]."?akcja=wyloguj'><button>Wyloguj</button></a>");
    }
    else {
        echo("<form action='".$_SERVER["PHP_SELF"]."' method='POST'>
        <input type='text' placeholder='login' name='username'><br>
        <input type='password' placeholder='hasło' name='password'><br>");
        if ($userExists == false) {
            echo("<span class='error'>Błędny login</span>");
        }
        else if ($badPassword == true) {
            echo("<span class='error'>Błędne hasło</span>");
        }
        echo("<br><input type='submit' value='Zaloguj'>
        </form>");
    }
?>

<!-- SELECT roles.role, permissions.permission FROM users INNER JOIN roles ON users.id_role=roles.id_role INNER JOIN role_permission ON roles.id_role=role_permission.id_role INNER JOIN permissions ON role_permission.id_perm=permissions.id_perm WHERE users.username like "jacek" -->