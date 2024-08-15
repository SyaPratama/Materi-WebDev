<?php 
// Variable Scope / lingkup variable

// Variable Local Untuk Lingkup Untuk Halaman Ini
$x = 10;

function tampilX(){
    // Variable Local Untuk Lingkup Function Ini Saja
    // $x = 20;
    // Global Variable
    // Menggunakan Global Variable
    global $x;
    echo $x;
}
tampilX();


// SuperGlobals Variable
// Semua Variable Global Adalah Array Associative

// $_GET
// $_POST
// $_REQUEST
// $_SESSION
// $_COOKIE
// $_SERVER
// $_ENV
// $_FILE

// var_dump($_SERVER);
echo $_SERVER["SERVER_NAME"];
?>