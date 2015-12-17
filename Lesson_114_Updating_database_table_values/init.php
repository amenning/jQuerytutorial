<?php 
session_start();
$_SESSION['user_id']='2';

mysql_connect('localhost','root','');
mysql_select_db('jquery');
?>