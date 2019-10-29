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
        $sql = "SELECT proj_titles.id_titles, proj_titles.title, proj_authors.name FROM proj_titles JOIN proj_books ON proj_titles.id_titles = proj_books.id_titles JOIN proj_authors ON proj_books.id_authors = proj_authors.id_authors";
        $result = $this->conn->query($sql);
        $bookList = [];
        while ($row = $result->fetch_assoc()) {
            $id = intval($row["id_titles"]);
            if (array_key_exists($id, $bookList)) {
                $bookList[$id][1][] = $row["name"];
            }
            else {
                $bookList[$id] = [$row["title"], [$row["name"]]];
            }
        }
        return $bookList;
    }
}
?>