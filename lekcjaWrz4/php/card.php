<?php
header('Content-Type: text/html; charset=utf-8');
ini_set("default_charset", 'utf-8');
$conn = new mysqli("172.16.131.125", "02_belica", "6FY6fz9K", "02_belica");
$sql = "SELECT * FROM cars";
$result = $conn -> query($sql);
while($row = $result -> fetch_assoc()) {
    echo('<div class="item card">
        <div class="product">
            <img src="'.$row["foto"].'"
            class="product-img" alt="office chair">
            <div class="product-info">
                <p class="product-price">Cena: <span class="product-price-value">'.$row["cena"].'zł</span><br>
                <span class="product-sale">Promocja</span></p>
                <div class="product-variants">Kolor:
                    <ul>
                        <li>Czarny</li>
                        <li>Szary</li>
                        <li>Beżowy</li>
                    </ul>
                </div>
            </div>
            <div class="product-desc">
                <h3>'.$row["nazwa"].'</h3>
                <p>'.$row["opis"].'</p>
                <a href="#">Więcej</a>
                <a href="#">Kup Teraz</a>
            </div>
        </div>
    </div>');
}
?>