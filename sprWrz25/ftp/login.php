<?php
    session_start();
    if (isset($_GET["akcja"]) && $_GET["akcja"] == "wyloguj" && isset($_SESSION["zalogowany"])) {
        unset($_SESSION["zalogowany"]);
    }
    if (isset($_POST["login"]) && $_POST["login"] == "1234") {
        $_SESSION["zalogowany"] = 1;
    }
    if (isset($_SESSION["zalogowany"]) && $_SESSION["zalogowany"] == 1) {
        echo("<a href='".$_SERVER["PHP_SELF"]."?akcja=wyloguj'><button>Wyloguj</button></a>");
    }
    else {
        echo("<form action='".$_SERVER["PHP_SELF"]."' method='POST'>
        <input type='text' placeholder='login' name='login'><br><br>
        <input type='submit' value='Zaloguj'>
        </form>");
    }
?>