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
        <div class="top">
            <table>
                <tr><td>tytul</td><td>autor</td><td>login</td><td>date_wyp</td><td>date_odd</td><td>usun</td></tr>
                <?php
                $conn = new mysqli("172.16.131.125", "z_zxc", "tre", "z_zxc");
                // $sql = "select * from bibl_wyp, bibl_user, bibl_tytul where bibl_wyp.id_book = bibl_tytul.id_tytul and bibl_wyp.id_user = bibl_user.id_user;";
                $sql = "select * from bibl_wyp, bibl_user, bibl_book, bibl_tytul, bibl_autor where bibl_wyp.id_book = bibl_book.id_book and bibl_book.id_tytul = bibl_tytul.id_tytul and bibl_wyp.id_user = bibl_user.id_user and bibl_book.id_autor = bibl_autor.id_autor;";
                $result = mysqli_query($conn, $sql);
                while($row = mysqli_fetch_assoc($result)) {
                    $id = $row["id_wyp"];
                    $book = $row["tytul"];
                    $user = $row["login"];
                    $autor = $row["autor"];
                    $wyp = $row["date_wyp"];
                    $odd = $row["date_odd"];
                    echo("<tr><td>$book</td><td>$autor</td><td>$user</td><td>$wyp</td><td>$odd</td><td><form action='delete.php' method='POST'><input type='text' value='$id' name='id' hidden><input type='submit' value='X'></form></td></tr>");
                }                
                ?>
            </table>
        </div>
        <div class="bottom">
            <div class="left">
                <form class="form" action="insert.php" method="POST">
                    <input class="input" type="text" name="autor"><br>
                    <input type="submit" value="Dodaj" class="add">
                </form>
            </div>
            <div class="right">
                <table>
                    <tr><td>id_autor</td><td>autor</td></tr>
                    <?php
                    $conn = new mysqli("172.16.131.125", "z_zxc", "tre", "z_zxc");
                    $sql = "select * from bibl_autor;";
                    $result = mysqli_query($conn, $sql);
                    while($row = mysqli_fetch_assoc($result)) {
                        $id = $row["id_autor"];
                        $autor = $row["autor"];
                        echo("<tr><td>$id</td><td>$autor</td></tr>");
                    }                
                    ?>
                </table>
            </div>
        </div>
    </div>
</body>
</html>