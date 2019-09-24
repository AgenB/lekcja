<?php
    session_start();
    if (isset($_GET["action"]) && $_GET["action"] == "logout") {
        unset($_SESSION["logged"]);
    }
    if (isset($_POST["password"]) && $_POST["password"] == "1234") {
        $_SESSION["logged"] = 1;
    }
    if (isset($_SESSION["logged"]) && $_SESSION["logged"] == 1) {
        echo("<p>Jesteś zalogowany<br>
        <a href='".$_SERVER["PHP_SELF"]."?action=logout'><button>Sign out</button></a></p>");
    }
    else {
        echo("<form action='".$_SERVER["PHP_SELF"]."' method='POST'><input type='password' name='password'><br><input type='submit' value='Sign in'></form>");
    }
?>