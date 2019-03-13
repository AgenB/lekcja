<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Page Title</title>
    <link rel="stylesheet" type="text/css" media="screen" href="style.css">
</head>
<body>
    <div class="container">
        <div class="left">
            <form action="insert.php" method="POST">
                <input type="text" name="imie">
                <input type="text" name="nazwisko">
                <input type="text" name="zarobki">
                <input type="submit">
            </form>
        </div>
        <div class="right">
            <ul>
                <?php
                $conn = mysqli_connect("localhost", "root", "", "root");
                $sql = "select * from tabela;";
                $result = mysqli_query($conn, $sql);

                while($row = mysqli_fetch_assoc($result)) {
                    $imie = $row["imie"];
                    $nazwisko = $row["nazwisko"];
                    $zarobki = $row["zarobki"];
                    echo("<li>$imie $nazwisko, $zarobki</li>");
                }

                mysqli_close($conn);
                ?> 
            </ul>
        </div>
    </div>
</body>
</html>