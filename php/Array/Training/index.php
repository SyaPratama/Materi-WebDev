<?php
// $mahasiswa = ['Rasya Putra Pratama', '227118', 'Rekayasa Perangkat Lunak', 'inirasya16@gmail.com'];;
// Multidimension Array
$mahasiswa = [
    ['Rasya Putra Pratama', '227118', 'Rekayasa Perangkat Lunak', 'inirasya16@gmail.com'],
    ['Muhammad Abdul Alif','227185', 'Rekayasa Perangkat Lunak', 'alif@gmail.com'],
    ['Galih Tri Ardiansyah', '227054', 'Rekayasa Perangkat Lunak', 'galihtri@gmail.com']
];;


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daftar Siswa SMK</title>
</head>

<body>
    <h1>Daftar Siswa SMK</h1>

    <!-- Use Foreach Loop -->
    <!-- <ul>
        <?php foreach ($mahasiswa as $mhs) : ?>
            <li><?= $mhs ?></li>
        <?php endforeach; ?>
    </ul> -->

    <?php foreach ($mahasiswa as $mhs) : ?>
        <ul>
            <li>Nama: <?= $mhs[0] ?></li>
            <li>Nis: <?= $mhs[1] ?></li>
            <li>Jurusan: <?= $mhs[2] ?></li>
            <li>Email: <?= $mhs[3] ?></li>
        </ul>
    <?php endforeach; ?>

</body>

</html>