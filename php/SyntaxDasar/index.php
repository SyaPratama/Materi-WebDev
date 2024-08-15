<?php
// Syntax Dasar PHP 

// Comment

// Single Line Comment
/*
        Multiple Line Comment
    */


// Standar Output

// echo, print
// print_r (untuk mencetak array)
// var_dump (untuk melihat isi variable)

// echo "Shandika Galih";
// print "Rasya Putra Pratama";
// print_r(["Raya",'Jamet']); -> array version
// print_r('rasya putra pratama'); 
// var_dump('Rasya Putra Pratama');



// Penulisan Sintaks PHP
// 1. PHP Di dalam HTML
// 2. HTML Di dalam PHP

// Variable Dan Type Data
// Variable
// Tidak Boleh diawali dengan angka, tapi boleh mengandung angka
$nama = "Ucup";
// echo "Halo, nama saya $nama";

// Operator Aritmatika
// aritmatika
// $x = 10;
// $y = 10;
// $z = $x + $y;
// echo $z;

// Penggabung String / concatenation / concat
// .
// $nama_depan = 'Rasya';
// $nama_belakang = 'Pratama';
// echo $nama_depan . " " .$nama_belakang;


// Assignment 
// =, += ,-= ,*=, %=, .=, /=
// $x = 1;
// $x -= 5;

// $nama = "Rasya";
// $nama .= " ";
// $nama .= "Pratama";
// echo $nama;


// Perbandingan
// < , > , <= , >= , ==, !=
// var_dump(1 == "1");

// Indentitas
// === , !===
// var_dump(1 === '1');

// Logika 
// &&, ||, !
$x = 10;
var_dump($x < 20 || $x % 2 == 0);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Belajar PHP</title>
</head>

<body>
    <!-- PHP Di Dalam HTML -->
    <!-- <h1>Halo, Selamat Datang <?php echo $nama ?></h1> -->

    <!-- HTML Di Dalam PHP -->
    <!-- <?php
        echo "<h1>Halo, Selamat Datang Rasya</h1>"
    ?> -->
</body>

</html>