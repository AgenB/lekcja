<?php
class biblsql {
    private $dbserver = "172.16.131.125";
    private $dblogin = "02_belica";
    private $dbpass = "6FY6fz9K";
    private $dbname = "02_belica";
    private $conn;

    function __construct() {
        $this->conn = new mysqli($this->dbserver, $this->dblogin, $this->dbpass, $this->dbname);
    }
    function __destruct() {
        $this->conn->close();
    }

    function getBookList() {
        
    }
}
?>