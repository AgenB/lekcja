<?php
require("../lib/connect.php");
$myArr = [];
$zap = "select * from pracownicy;";
$result = mysqli_query($conn, $zap);
while($row = mysqli_fetch_assoc($result)) {
    $myArr[] = $row["imie"];
}
$conn -> close();
$myJSON = json_encode($myArr);
echo $myJSON;
?>