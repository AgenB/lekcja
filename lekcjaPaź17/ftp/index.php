<?php
class auto {
    private $marka;
    private $kolor = "czerwony";
    private $predkosc;
    private $tab = array();

    function __construct($marka_podana) {
        $this->predkosc = 0;
        $this->marka = $marka_podana;
        echo "konstruktor marka: ".$this->marka."<br>";
        echo "konstruktor kolor: ".$this->kolor."<br>";
        echo "konstruktor predkosc: ".$this->predkosc."<br>";
    }
    function __get($nazwa) {
        echo $nazwa." = ".$this->tab[$nazwa]."<br>";
    }
    function __set($nazwa, $wartosc) {
        echo "ustawiłeś $nazwa = $wartosc<br>";
        $this->tab[$nazwa] = $wartosc;
    }
    function sprawdzenie() {
        echo "działam";
    }
    function uruchomAuto() {
        $this->predkosc = 5;
        echo "<br>jade ".$this->marka;
    }
    function getPredkosc() {
        return $this->predkosc;
    }
    function setPredkosc() {
        $this->predkosc += 5;
    }
}

$mojeAutko1 = new auto("skoda");
$mojeAutko1->a = 1;
$mojeAutko1->a;
?>