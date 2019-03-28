<?php
$conn = new mysqli("172.16.131.125", "z_zxc", "tre", "z_zxc");
$sql = "delete from bibl_wyp where id_wyp = ".$_POST["id"].";";
mysqli_query($conn, $sql);
header("location: index.php");
?>