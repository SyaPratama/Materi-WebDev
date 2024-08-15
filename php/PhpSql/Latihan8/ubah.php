<?php
session_start();

// Jika User Belum Login Maka
if(!isset($_SESSION["login"])){
    header('Location: login.php');
    exit;
}


require "functions.php";

// ambil data di url
$nis = $_GET["nis"];


// Query Data Siswa Smk Berdasarkan NIS
$siswa = query("SELECT * FROM siswa WHERE nis = $nis")[0];

// Koneksi Ke DBMS
$conn = mysqli_connect('localhost', 'root', '', 'phpdasar');

// cek apakah button submit sudah pernah dibuat/diclick
if (isset($_POST["submit"])) {
    // cek apakah data berhasil diubah atau tidak
    if (ubah($_POST) > 0) {
        echo "
            <script>
            alert('Data Berhasil Diubah!');
            document.location.href = 'index.php';
            </script>
        ";
    } else {
        echo "
        <script>
        alert('Data Gagal Diubah!');
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
    <title>Update Siswa SMK</title>
</head>

<body>
    <h1>Update Siswa SMK</h1>

    <a href="index.php">Kembali Ke Halaman Beranda...</a>

    <form action="" method="post" enctype="multipart/form-data">
        <ul>
            <input type="hidden" name="id" value="<?= $siswa["id"] ?>">
            <input type="hidden" name="gambarLama" value="<?=$siswa["gambar"]?>">
            <li>
                <label for="nama">Nama</label>
                <input type="text" name="nama" id="nama" required value="<?= $siswa["nama"] ?>">
            </li>
            <li>
                <label for="nis">NIS</label>
                <input type="text" name="nis" id="nis" required value="<?= $siswa["nis"] ?>">
            </li>
            <li>
                <label for="email">Email</label>
                <input type="email" name="email" id="email" required value="<?= $siswa["email"] ?>">
            </li>
            <li>
                <label for="jurusan">Jurusan</label>
                <input type="text" name="jurusan" id="jurusan" required value="<?= $siswa["jurusan"] ?>">
            </li>
            <li>
                <label for="gambar">Gambar</label>
                <br>
                <img src="img/<?=$siswa["gambar"]?>" width="50">
                <br>
                
                <input type="file" name="gambar" id="gambar">
            </li>
            <li>
                <button type="submit" name="submit">Ubah Data!</button>
            </li>
        </ul>
    </form>
</body>

</html>