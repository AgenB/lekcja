<?php
    if (isset($_SESSION["zalogowany"]) && $_SESSION["zalogowany"] == 1) {
        echo("green");
    }
    else {
        echo("red");
    }
?>