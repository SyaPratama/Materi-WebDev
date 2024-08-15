<?php
require '../functions.php';
$keyword = $_GET["keyword"];
$query = "SELECT * FROM siswa WHERE nama LIKE '%$keyword%' OR nis LIKE '%$keyword%' OR email LIKE '%$keyword%' OR jurusan LIKE '%$keyword%' ";
$siswa = query($query);
?>
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
        <?php $i = 1 ?>
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