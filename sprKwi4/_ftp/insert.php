<?php
$conn = new mysqli("172.16.131.125", "z_rty", "ghj", "z_rty");
$sql = "insert into organizacja values(NULL, '".$_POST["nazwa"]."');";
$result = mysqli_query($conn, $sql);
mysqli_fetch_assoc($result);
header("location: index.php");
?>