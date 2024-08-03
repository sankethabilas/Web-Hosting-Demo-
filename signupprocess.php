<?php

$fname = $_POST["fname"];
$lname = $_POST["lname"];
$email = $_POST["email"];
$pw = $_POST["pw"];
$city = $_POST["city"];

$con = new mysqli("sql104.infinityfree.com", "if0_37020675", "#######", "if0_37020675_db1", "3306");

$q = "INSERT INTO  `user` (`fname`,`lname`,`email`,`password`,`city`)
VALUES ('" . $fname . "','" . $lname . "','" . $email . "','" . $pw . "','" . $city . "')";

$con->query($q);

echo ("success");



?>
