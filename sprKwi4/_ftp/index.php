<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="style.css" />
</head>
<body>
    <div class="container">
        <div class="top red">
            <img src="img.png">
            <input type="button" class="changeColor" value="Zmień">
        </div>
        <div class="middle">
            <div class="left">
                <form class="form" action="insert.php" method="POST">
                    <input type="text" name="nazwa">
                    <input type="submit" value="Dodaj">
                </form>
            </div>
            <div class="right">
                <table>
                    <tr><td>id_org</td><td>nazwa_dzial</td><td>usuń</td></tr>
                    <?php
                    $conn = new mysqli("172.16.131.125", "z_rty", "ghj", "z_rty");
                    $sql = "select * from organizacja;";
                    $result = mysqli_query($conn, $sql);
                    while($row = mysqli_fetch_assoc($result)) {
                        echo("<tr><td>".$row["id_org"]."</td><td>".$row["nazwa_dzial"]."</td><td><form action='delete.php' method='POST'>
                        <input type='text' value='".$row["id_org"]."' hidden name='id'>
                        <input type='submit' value='X'></form></td></tr>");
                    }
                    ?>
                </table>
            </div>
        </div>
        <div class="bottom">
            
        </div>
    </div>
<script src="script.js"></script>
</body>
</html>