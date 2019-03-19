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
        <div class="left">
            <form action="insert.php" method="POST">
                <input type="text" name="imie"><br>
                <input type="select" name="dzial"><br>
                <input type="text" name="zarobki"><br>
                <input type="text" name="data"><br>
                <input class="submit" type="submit">
            </form>
        </div>
        <div class="right">
            <div class="top">
                <div>
                    <h3>1</h3>
                    <table id="table01">
                        <tr><td>imie</td><td>zarobki</td></tr>
                        <?php
                        $conn = new mysqli("172.16.131.125", "z_dfg", "ytr", "z_dfg");
                        $sql = "select * from pracownicy where imie like '%a' and zarobki > 25;";
                        $result = mysqli_query($conn, $sql);
                        while($row = mysqli_fetch_assoc($result)) {
                            $imie = $row["imie"];
                            $zarobki = $row["zarobki"];
                            echo("<tr><td>$imie</td><td>$zarobki</td></tr>");
                        }
                        ?>
                    </table>
                </div>
                <div>
                    <h3>2</h3>
                    <table id="table02">
                        <tr><td>imie</td><td>nazwa_dzial</td></tr>
                        <?php
                        $conn = new mysqli("172.16.131.125", "z_dfg", "ytr", "z_dfg");
                        $sql = "select * from pracownicy, organizacja where (imie not like '%a' and (dzial = 1 or dzial = 3) and id_org = dzial);";
                        $result = mysqli_query($conn, $sql);
                        while($row = mysqli_fetch_assoc($result)) {
                            $imie = $row["imie"];
                            $nazwa_dzial = $row["nazwa_dzial"];
                            echo("<tr><td>$imie</td><td>$nazwa_dzial</td></tr>");
                        }
                        ?>
                    </table>
                </div>
            </div>
            <div class="bottom">
                <div>
                    <h3>3</h3>
                    <table id="table03">
                        <tr><td>imie</td><td>nazwa_dzial</td></tr>
                        <?php
                        $conn = new mysqli("172.16.131.125", "z_dfg", "ytr", "z_dfg");
                        $sql = "select * from pracownicy, organizacja where dzial = id_org and dzial = 3;";
                        $result = mysqli_query($conn, $sql);
                        while($row = mysqli_fetch_assoc($result)) {
                            $imie = $row["imie"];
                            $nazwa_dzial = $row["nazwa_dzial"];
                            echo("<tr><td>$imie</td><td>$nazwa_dzial</td></tr>");
                        }
                        ?>
                    </table>
                </div>
                <div>
                    <h3>4</h3>
                    <table id="table04">
                        <tr><td>imie</td><td>nazwa_dzial</td><td>zarobki</td></tr>
                        <?php
                        $conn = new mysqli("172.16.131.125", "z_dfg", "ytr", "z_dfg");
                        $sql = "select * from pracownicy, organizacja where id_org = dzial and dzial = 2 and (zarobki >= 10 and zarobki <= 30);";
                        $result = mysqli_query($conn, $sql);
                        while($row = mysqli_fetch_assoc($result)) {
                            $imie = $row["imie"];
                            $nazwa_dzial = $row["nazwa_dzial"];
                            $zarobki = $row["zarobki"];
                            echo("<tr><td>$imie</td><td>$nazwa_dzial</td><td>$zarobki</td></tr>");
                        }
                        ?>
                    </table>
                </div>
            </div>
        </div>
    </div>
<script src="script.js"></script>
</body>
</html>