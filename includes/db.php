<?php
$server_name = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "fass_data";

$conn = mysqli_connect($server_name, $dbUsername, $dbPassword, $dbName);

if(!$conn)
{
	die("Error making the database connection");
}