<?php
$conn = new mysqli("172.16.131.125", "z_rty", "ghj", "z_rty");
$sql = "delete from organizacja where id_org = ".$_POST["id"].";";
$result = mysqli_query($conn, $sql);
mysqli_fetch_assoc($result);
header("location: index.php");
?>