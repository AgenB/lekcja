<?php
function selectLimit($tableName, $columnSort, $sort, $limitNumber) {
    require("../lib/connect.php");
    $sql = "select * from $tableName order by $columnSort $sort limit $limitNumber;";
    echo $sql;
    $result = $conn -> query($sql);
    ?>
    <table border=1>
    <?php while($row = $result -> fetch_assoc()):?>
        <tr>
            <td><?php echo($row["id_pracownicy"]);?></td>
            <td><?php echo($row["imie"]);?></td>
            <td><?php echo($row["zarobki"]);?></td>
        </tr>
    <?php endwhile; ?>
    </table>

    <?php
}
?>