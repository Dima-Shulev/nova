<?php
include_once "Connect.php";
$connect = new PDO("mysql:host=".Connect::HOST.";dbname=".Connect::DB.";charset=".Connect::CHARSET,Connect::USER,Connect::PASS);

function queryDateBase($connect){
    $result = [];
    $arr = $_POST;
    $prepare = $connect->prepare("SELECT * FROM `test` WHERE id > '1'");
    $prepare->execute();
    $res = $prepare->fetchAll(PDO::FETCH_ASSOC);

    foreach($res as $value) {
        $result[] = $value;
    }
    $result = array_merge($result, $arr);
    return $result;
}

var_dump(queryDateBase($connect));
?>
