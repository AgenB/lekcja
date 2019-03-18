<?php
require("functions.php");
function dzialanie($liczba1, $liczba2, $dzialanie) {
    if($dzialanie == "+") {
        $wynik = $liczba1 + $liczba2;
    }
    if($dzialanie == "-") {
        $wynik = $liczba1 - $liczba2;
    }
    echo("<li>Wynik działania: ".$wynik);
}

function dzialanie_inaczej($liczba1, $liczba2, $dzialanie) {
    switch($dzialanie) {
        case "+":
            $wynik = $liczba1 + $liczba2;
            break;
        case "-":
            $wynik = $liczba1 - $liczba2;
            break;
        case "*":
            $wynik = $liczba1 * $liczba2;
            break;
        case "/":
            if($liczba1 == 0 || $liczba2 == 0) {
                $wynik = "Nie wolno dzielić przez 0";
                break;
            }
            $wynik = $liczba1 / $liczba2;
            break;
    }
    echo("<li>Wynik działania: ".$wynik);
}

dzialanie(5, 3, "+");
dzialanie(9, -2, "-");

dzialanie_inaczej(10, 3, "*");
dzialanie_inaczej(0, 10, "/");

selectLimit("pracownicy", "zarobki", "asc", "3");
?>