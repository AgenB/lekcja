<?php

function createTable($sql, $className = "table") {
    require("../lib/connect.php");
    $result = mysqli_query($conn, $sql);
    $columns = [];
    echo("<table class='".$className."'><br>");
    while($row = mysqli_fetch_assoc($result)) {
        $amount = 0;
        if(empty($columns)) {
            $columns = array_keys($row);
            $amount = count($columns);
            echo("<tr>");
            for($i = 0; $i < $amount; $i++) {
                echo("<td>".)
            }
        }
    }
}
?>