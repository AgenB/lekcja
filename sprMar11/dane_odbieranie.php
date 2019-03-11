<?php
$conn = mysqli_connect("172.16.131.125", "z_sdf", "iuy", "z_sdf");
$sql = "select * from imiona;";
$result = mysqli_query($conn, $sql);
$arr = [];
while($row = mysqli_fetch_assoc($result)) {
    $arr[] = $row;
}
echo(json_encode($arr));
?>