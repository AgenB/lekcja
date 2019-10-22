<?php
include "class.user.php";

class ViewUsers extends User {
    function showAllUsers() {
        $myUsers = $this->getAllUsers();
        foreach ($myUsers as $user) {
            echo "<li>".$user["imie"]."</li>";
        }
    }
    function showUser($id) {
        $user = $this->getUser($id);
        echo $user["imie"];
    }
}
?>