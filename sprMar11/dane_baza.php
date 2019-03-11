<?php
$conn = mysqli_connect("172.16.131.125", "z_sdf", "iuy", "z_sdf");
$sql = "insert into imiona values(NULL, '".$_POST['imie']."');";
$result = mysqli_query($conn, $sql);
?>