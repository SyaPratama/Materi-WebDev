<?php
require_once __DIR__ . '/utility/function.php';
$query = "SELECT * FROM mahasiswa";
$mahasiswa = query($query);

// Search Handle
if (isset($_GET["keyword"])) {
    $dataPerHalaman = 2;
    $keyword = $_GET["keyword"];
    $jumlahData = count(cari($keyword));
    $jumlahHalaman = ceil($jumlahData / $dataPerHalaman);
    $halamanActive = isset($_GET["page"]) ? $_GET["page"] : 1;
    $urutHalamanAwal = ($dataPerHalaman * $halamanActive) - $dataPerHalaman;
    $mahasiswa = query("SELECT * FROM mahasiswa WHERE nama LIKE '%$keyword%' LIMIT $urutHalamanAwal,$dataPerHalaman");
} else {
    $dataPerHalaman = 2;
    $jumlahData = count(query($query));
    $jumlahHalaman = ceil($jumlahData / $dataPerHalaman);
    $halamanActive = isset($_GET["page"]) ? $_GET["page"] : 1;
    $urutHalamanAwal = ($dataPerHalaman * $halamanActive) - $dataPerHalaman;
    $mahasiswa = query("SELECT * FROM mahasiswa LIMIT $urutHalamanAwal,$dataPerHalaman");
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD - Mahasiswa</title>
    <!-- STYLESHEET -->
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <div class="container">
        <h1>Data Mahasiswa</h1>

        <div class="wrapper">
            <a href="tambah.php" class="add-data" name="tambah">Tambah Data</a>
            <form action="" method="get">
                <input type="text" class="keyword" name="keyword" placeholder="Cari Data...">
                <button class="cari" type="submit">Cari</button>
            </form>
        </div>
        <table border="1" cellspacing="0">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Nis</th>
                    <th>Jurusan</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <?php $i = 1; ?>
                <?php foreach ($mahasiswa as $person) : ?>
                    <tr>
                        <td><?= $i ?></td>
                        <td><?= $person["nama"] ?></td>
                        <td><?= $person["nis"] ?></td>
                        <td><?= $person["jurusan"] ?></td>
                        <td><?= $person["email"] ?></td>
                        <td>
                            <a name="edit" href="ubah.php?id=<?= $person["id"] ?>" class="btn-data btn-edit">Edit</a>
                            <a name="delete" href="delete.php?id=<?= $person["id"] ?>" onclick="return confirm('Apakah Anda Yakin Ingin Menghapus?')" class="btn-data btn-delete">Delete</a>
                        </td>
                    </tr>
                    <?php $i++ ?>
                <?php endforeach; ?>
            </tbody>
        </table>

        <div class="wrap-nav">
            <?php for ($i = 1; $i <= $jumlahHalaman; $i++) : ?>
                <?php if (isset($_GET["page"]) && $_GET["page"] == $i) : ?>
                    <a href="?page=<?= isset($_GET["keyword"]) ? $i . '&'.'keyword='.$_GET["keyword"] : $i ?>" class="navigation active"><?= $i ?></a>
                <?php else : ?>
                    <?php if (!isset($_GET["page"]) && $i === 1) : ?>
                        <a href="?page=<?= $i ?>" class="navigation active"><?= $i ?></a>
                    <?php else : ?>
                        <a href="?page=<?= $i ?>" class="navigation"><?= $i ?></a>
                    <?php endif; ?>
                <?php endif ?>
            <?php endfor; ?>
        </div>
    </div>
</body>

</html>