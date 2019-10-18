<?php
class Calculator {
    public $number1;
    public $number2;
    public $operation;

    public function __construct($a, $b, $c) {
        $this->number1 = $a;
        $this->number2 = $b;
        $this->operation = $c;
    }

    public function calculate() {
        switch ($this->operation) {
            case "add":
                echo($this->number1 + $this->number2);
                break;
            
            case "sub":
                echo($this->number1 - $this->number2);
                break;
            
            case "mul":
                echo($this->number1 * $this->number2);
                break;
            
            case "div":
                echo($this->number1 / $this->number2);
                break;
            default:
                echo("nie");
                break;
        }
    }
}
?>