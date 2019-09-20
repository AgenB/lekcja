<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Document</title>
    <link rel="Stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div class="container">
        <div class="header">header</div>
        <div class="sidebar">sidebar</div>
        <div class="productList">
            <?php require("card.php"); ?>
        </div>
        <div class="footer">footer</div>
    </div>
<?php
    setcookie("dawid_belica", "mam cie", time() + 3600);
?>
</body>
</html>