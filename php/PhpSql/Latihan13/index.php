<?php
session_start();

// Jika User Belum Login Maka
if (!isset($_SESSION["SESSION_LOGIN"])) {
    header('Location: login.php');
    exit;
}

// Memanggil File Functions
require 'functions.php';

// tombol cari ditekan / $_POST["search"] sudah dibuat 
if (isset($_GET["keyword"])) {
    $jumlahDataPerHalaman = 5;
    $keyword = $_GET["keyword"];
    $search = query("SELECT * FROM siswa WHERE nama LIKE '%$keyword%'");
    $jumlahData = count($search);
    $jumlahHalaman = ceil($jumlahData / $jumlahDataPerHalaman);
    $halamanActive = isset($_GET["page"]) ? $_GET["page"] : 1;
    $awalData = ($jumlahDataPerHalaman *     $halamanActive) - $jumlahDataPerHalaman;
    $siswa = query("SELECT * FROM siswa WHERE nama LIKE '%$keyword%' LIMIT $awalData,$jumlahDataPerHalaman");
} else {
    // pagination
    // konfigurasi
    // jumlah halaman = total data / jumlahdataperhalaman
    $jumlahDataPerHalaman = 5;
    $jumlahData = count(query("SELECT * FROM siswa"));
    $jumlahHalaman = ceil($jumlahData / $jumlahDataPerHalaman);
    $halamanActive = isset($_GET["page"]) ? $_GET["page"] : 1;
    $awalData = ($jumlahDataPerHalaman * $halamanActive) - $jumlahDataPerHalaman;
    // menggunakan syntax SQL (LIMIT) -> membatasi data yang tampil
    // setelah LIMIT wajib memberi 2 nilai
    // nilai pertama -> mau dimulai dari data ke berapa dengan awal index ke 0
    // nilai kedua -> mau berapa data yang ditampilkan  
    // Memanggil Function Query Dari File Functions
    $siswa = query("SELECT * FROM siswa LIMIT $awalData,$jumlahDataPerHalaman");
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman Admin</title>

    <style>
        .loader{
            width: 50px;
            position: absolute;
            mix-blend-mode: multiply;
            top: 125px;
            z-index: -1;
            display: none;
        }

        .input{
            margin-bottom: 20px;
        }
    </style>

    <!-- JQuery -->
    <script src="js/jquery-3.7.1.js"></script>
    
</head>

<body>

    <a href="logout.php">Logout...</a>

    <h1>Daftar Mahasiswa</h1>

    <a href="tambah.php">Tambah Data Siswa SMK</a>
    <br><br>

    <form action="" method="get" class="input">

        <input type="text" name="keyword" size="40" autofocus placeholder="Masukan Keyword Pencarian...." autocomplete="off" id="keyword">
        <button type="submit" id="btn-search">Search</button>

        <img src="img/loader.gif" class="loader">
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
        
        <!-- Navigasi -->

        <?php if ($halamanActive > 1) : ?>
            <a href="?page=<?= (isset($_GET["keyword"]) ? ($halamanActive - 1) . '&' . 'keyword=' . $_GET["keyword"] : ($halamanActive - 1)) ?>">&laquo;</a>
        <?php endif; ?>

        <?php for ($i = 1; $i <= $jumlahHalaman; $i++) : ?>
            <?php if ($i == $halamanActive) : ?>
                <!-- Pindah Ke Halaman Yang Sama Tambahkan ?page= -->
                <a href="?page=<?= (isset($_GET["keyword"]) ? $i . '&' . 'keyword=' . $_GET["keyword"] : $i) ?>" style="font-weight:bold;color:red;"><?= $i ?></a>
            <?php else : ?>
                <a href="?page=<?= (isset($_GET["keyword"]) ? $i . '&' . 'keyword=' . $_GET["keyword"] : $i) ?>"><?= $i ?></a>
            <?php endif; ?>
        <?php endfor; ?>


        <?php if ($halamanActive < $jumlahHalaman) : ?>
            <a href="?page=<?= (isset($_GET["keyword"]) ? ($halamanActive + 1) . '&' . 'keyword=' . $_GET["keyword"] : ($halamanActive + 1)) ?>">&raquo;</a>
        <?php endif; ?>
    </div>

    <script src="js/script.js"></script>
</body>

</html>