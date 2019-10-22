<?php
class DBConnect {
    private $server;
    private $user;
    private $pass;
    private $dbname;

    protected function connect() {
        $this->server = "172.16.131.125";
        $this->user = "02_belica";
        $this->pass = "6FY6fz9K";
        $this->dbname = "02_belica";

        $conn = new mysqli(
            $this->server,
            $this->user,
            $this->pass,
            $this->dbname);

        return $conn;
    }
}
?>