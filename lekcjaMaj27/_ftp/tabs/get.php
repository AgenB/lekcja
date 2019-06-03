<?php
$servername = "172.16.131.125";
$username = "z_ghj";
$password = "cxz";
$database = "z_ghj";


$conn = new mysqli($servername, $username, $password, $database);
$arr = [];
$sql = "select * from tabs;";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_assoc($result)) {
    $content = [$row["tabName"], $row["tabContent"]];
    $arr[] = $content;
}
$conn -> close();
$json = json_encode($arr);
echo $json;
?> 
