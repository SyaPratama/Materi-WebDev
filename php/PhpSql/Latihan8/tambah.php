<?php
session_start();

// Jika User Belum Login Maka
if(!isset($_SESSION["login"])){
    header('Location: login.php');
    exit;
}


require "functions.php";

// Koneksi Ke DBMS
$conn = mysqli_connect('localhost', 'root', '', 'phpdasar');

// cek apakah button submit sudah pernah dibuat/diclick
if (isset($_POST["submit"])) {

    // cek apakah data berhasil ditambahkan atau tidak
    if(tambah($_POST) > 0){
        echo "
            <script>
            alert('Data Berhasil Ditambahkan!');
            document.location.href = 'index.php';
            </script>
        ";
    }else{
        echo "
        <script>
        alert('Data Gagal Ditambahkan!');
        document.location.href = 'index.php';
        </script>
    ";
    }
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tambah Siswa SMK</title>
</head>

<body>
    <h1>Tambah Siswa SMK</h1>

    <a href="index.php">Kembali Ke Halaman Beranda...</a>


    <form action="" method="post" enctype="multipart/form-data">
        <ul>
            <li>
                <label for="nama">Nama: </label>
                <input type="text" name="nama" id="nama" required>
            </li>
            <li>
                <label for="nis">NIS: </label>
                <input type="text" name="nis" id="nis" required>
            </li>
            <li>
                <label for="email">Email: </label>
                <input type="email" name="email" id="email" required>
            </li>
            <li>
                <label for="jurusan">Jurusan: </label>
                <input type="text" name="jurusan" id="jurusan" required>
            </li>
            <li>
                <label for="gambar">Gambar: </label>
                <input type="file" name="gambar" id="gambar" required>
            </li>
            <li>
                <button type="submit" name="submit">Tambah Data!</button>
            </li>
        </ul>
    </form>
</body>

</html>