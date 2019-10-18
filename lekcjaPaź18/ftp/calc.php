<?php
include "class.calculator.php";

$calc = new Calculator($_POST["number1"], $_POST["number2"], $_POST["operation"]);
echo($calc->calculate());
?>