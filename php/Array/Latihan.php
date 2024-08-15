<?php 
// Array
// variable yang memiliki banyak nilai
// Element pada array boleh memiliki tipe data yang berbeda
// pasangan antara key dan value
// key nya adalah index yang dimulai dari 0



// membuat array
// cara lama
$hari = array("Senin","Selasa","Rabu","Kamis");

// Cara baru
$bulan = ["Januari","Februari","Maret"];
$arr1 = [123,"Anjay",true];

// Menampilkan Array
// var_dump($hari);
// echo "<br>";
// print_r($bulan);
// echo "<br>";


// Menampilkan 1 element pada array
// echo $arr1[0];
// echo "<br>";
// echo $bulan[1];


// menambahkan element baru pada array
var_dump($hari);
$hari[] = "Jum'at";
$hari[] = 'Sabtu';
echo "<br>";
var_dump($hari);

?>