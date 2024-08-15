<?php
session_start();

// Jika User Belum Login Maka
if(!isset($_SESSION["SESSION_LOGIN"])){
    header('Location: login.php');
    exit;
}

// Memanggil File Functions
require 'functions.php';
// Memanggil Function Query Dari File Functions
$siswa = query('SELECT * FROM siswa');

// tombol cari ditekan / $_POST["search"] sudah dibuat 
if(isset($_POST["search"])){    
    $siswa = cari($_POST["keyword"]);
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman Admin</title>
</head>

<body>

    <a href="logout.php">Logout...</a>

    <h1>Daftar Mahasiswa</h1>

    <a href="tambah.php">Tambah Data Siswa SMK</a>
    <br><br>

    <form action="" method="post">
        <input type="text" name="keyword" size="40" autofocus placeholder="Masukan Keyword Pencarian...." autocomplete="off">
        <button type="submit" name="search">Search</button>
    </form>

    <table border="1" cellpadding="10" cellspacing="0">
        <thead>
            <th>No.</th>
            <th>Aksi</th>
            <th>Gambar</th>
            <th>NIS</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Jurusan</th>
        </thead>

        <tbody>
            <?php $i = 1?>
            <?php foreach($siswa as $row) : ?>
            <tr>
                <td><?=$i?></td>
                <td>
                    <a href="ubah.php?nis=<?=$row["nis"]?>" >Change</a>
                    <a href="hapus.php?nis=<?=$row["nis"]?>" onclick="return confirm('Apakah Yakin?')">Delete</a>
                </td>
                <td>
                    <img src="img/<?=$row["gambar"]?>" alt="<?=$row["gambar"]?>" width="50">
                </td>
                <td><?=$row["nis"]?></td>
                <td><?=$row["nama"]?></td>
                <td><?=$row["email"]?></td>
                <td><?=$row["jurusan"]?></td>
            </tr>
            <?php $i++ ?>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>

</html>