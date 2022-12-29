<?php
include_once "Connect.php";
try {
    $connect = new PDO("mysql:host=".Connect::HOST.";dbname=".Connect::DB.";charset=".Connect::CHARSET,Connect::USER,Connect::PASS);
    if(isset($_POST)){
       $arr = [];
       $arr = $_POST;
       $arr["birthday"] = date("Y-m-d",strtotime($arr["birthday"]));
       $arr["date"] = date("Y-m-d H:m:s");
       $arr["ip"] = $_SERVER["REMOTE_ADDR"];
            $query = $connect->prepare("INSERT INTO `test` (`name`,`middle`,`birthday`,`date`,`ip`)VALUES(:nam,:middle,:birthday,:dates,:ip)");
            $query->execute(['nam' => $arr["name"], 'middle' => $arr["middle"], 'birthday' => $arr["birthday"], 'dates' => $arr["date"], 'ip' => $arr["ip"]]);
            $result = $query->fetch(PDO::FETCH_ASSOC);

     }
}catch(PDOException $e){
    echo "Ошибка соединения с DB".$e->getMessage();
}
var_dump($arr);

