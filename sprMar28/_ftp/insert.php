<?php
$conn = new mysqli("172.16.131.125", "z_zxc", "tre", "z_zxc");
$sql = "insert into bibl_autor values(NULL, '".$_POST["autor"]."');";
mysqli_query($conn, $sql);
header("location: index.php");
?>