<?php
// connection
$DB_HOST = '127.0.0.1';
$DB_NAME = 'root';
$DB_PASSWORD = '';
$DB_DATABASE = 'crudphp';

$conn = mysqli_connect($DB_HOST,$DB_NAME,$DB_PASSWORD,$DB_DATABASE);

if($conn->connect_errno){
    printf("Koneksi Gagal: \n",$conn->connect_error);
    exit;
}