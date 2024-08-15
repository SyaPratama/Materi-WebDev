<?php
// session_start untuk menjalankan $_SESSION
session_start();

// Session
// $_SESSION untuk menggunakan superglobal session
// Nilai Session akan tetap hingga dalam 1 sesi (User Menutup Browser/Mematikan Perangkat)
$_SESSION["nama"] = "Rasya";

?>