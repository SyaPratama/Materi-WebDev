<?php
require '../functions.php';

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