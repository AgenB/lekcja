<?php
include "class.dbconnect.php";

class User extends DBConnect {
    protected function getAllUsers() {
        $sql = "SELECT * FROM pracownicy";
        $result = $this->connect()->query($sql);
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }
    protected function getUser($id) {
        $sql = "SELECT * FROM pracownicy WHERE id_pracownicy = $id";
        $result = $this->connect()->query($sql);
        $data = $result->fetch_assoc();
        return $data;
    }
}
?>