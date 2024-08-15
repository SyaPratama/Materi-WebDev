<?php
session_start();

// Jika User Belum Login Maka
if (!isset($_SESSION["SESSION_LOGIN"])) {
    header('Location: login.php');
    exit;
}

// Memanggil File Functions
require 'functions.php';


// pagination
// konfigurasi
// jumlah halaman = total data / jumlahdataperhalaman
$jumlahDataPerHalaman = 5;
$jumlahData = count(query("SELECT * FROM siswa"));
$jumlahHalaman = ceil($jumlahData / $jumlahDataPerHalaman);
$halamanActive = isset($_GET["page"]) ? $_GET["page"] : 1;
// halaman = 1, awalData = 0;
// halaman = 2, awalData = 5
// awalData = 5 * 2 = 10 - 5 = 5
// halaman = 3, awalData = 10
// awalData = 5 * 3 = 15 - 5 = 10
$awalData = ($jumlahDataPerHalaman * $halamanActive) - $jumlahDataPerHalaman;
// menggunakan syntax SQL (LIMIT) -> membatasi data yang tampil
// setelah LIMIT wajib memberi 2 nilai
// nilai pertama -> mau dimulai dari data ke berapa dengan awal index ke 0
// nilai kedua -> mau berapa data yang ditampilkan  
// Memanggil Function Query Dari File Functions
$siswa = query("SELECT * FROM siswa LIMIT $awalData,$jumlahDataPerHalaman");

// tombol cari ditekan / $_POST["search"] sudah dibuat 
if (isset($_POST["search"])) {
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
        <input type="text" name="keyword" size="40" autofocus placeholder="Masukan Keyword Pencarian...." autocomplete="off" id="keyword">
        <button type="submit" name="search" id="btn-search">Search</button>
    </form>

    <div id="container">
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
            <?php $i = $awalData + 1 ?>
            <?php foreach ($siswa as $row) : ?>
                <tr>
                    <td><?= $i ?></td>
                    <td>
                        <a href="ubah.php?nis=<?= $row["nis"] ?>">Change</a>
                        <a href="hapus.php?nis=<?= $row["nis"] ?>" onclick="return confirm('Apakah Yakin?')">Delete</a>
                    </td>
                    <td>
                        <img src="img/<?= $row["gambar"] ?>" alt="<?= $row["gambar"] ?>" width="50">
                    </td>
                    <td><?= $row["nis"] ?></td>
                    <td><?= $row["nama"] ?></td>
                    <td><?= $row["email"] ?></td>
                    <td><?= $row["jurusan"] ?></td>
                </tr>
                <?php $i++ ?>
            <?php endforeach; ?>
        </tbody>
    </table>
    </div>
    <!-- Navigasi -->

    <?php if($halamanActive > 1) :?>
        <a href="?page=<?=$halamanActive - 1?>">&laquo;</a>
    <?php endif;?>

    <?php for ($i = 1; $i <= $jumlahHalaman; $i++) : ?>
        <?php if($i == $halamanActive) :?>
            <!-- Pindah Ke Halaman Yang Sama Tambahkan ?page= -->
            <a href="?page=<?=$i?>" style="font-weight:bold;color:red;"><?=$i?></a>
        <?php else : ?>
            <a href="?page=<?=$i?>"><?=$i?></a>
        <?php endif;?>
    <?php endfor; ?>


    <?php if($halamanActive < $jumlahHalaman) :?>
        <a href="?page=<?=$halamanActive + 1?>">&raquo;</a>
    <?php endif;?>

<script src="js/script.js"></script>
</body>

</html>