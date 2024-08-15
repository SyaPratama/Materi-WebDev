<?php
session_start();

// Jika User Belum Login Maka
if(!isset($_SESSION["login"])){
    header('Location: login.php');
    exit;
}

require 'functions.php';
$nis = $_GET["nis"];
if (hapus($nis) > 0) {
    echo "
    <script>
    alert('Data Berhasil Dihapus!');
    document.location.href = 'index.php';
    </script>
";
} else {
    echo "
<script>
alert('Data Gagal Dihapus!');
document.location.href = 'index.php';
</script>
";
}

?>
