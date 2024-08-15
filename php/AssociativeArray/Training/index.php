<?php
// Multidemension Array

// $mahasiswa = [
//     ["Rasya Putra Pratama", "227118",'inirasya16@gmail.com','Rekayasa Perangkat Lunak'],
//     ['228123','Ahmad Dhani','dhani@gmail.com','Teknik Permesinan']
//     ];

// Array Associative
// definisinya sama seperti array numerik, kecuali
// key nya adalah string yang bisa kita buat sendiri

$siswa = [
    [
        "nama" => "Rasya Putra Pratama",
        "nis" => "227118",
        "email" => "inirasya16@gmail.com",
        "jurusan" => "Rekayasa Perangkat Lunak",
        "gambar" => "satu.png"
    ],
    [
        "nis" => "227105",
        "jurusan" => "Rekayasa Perangkat Lunak",
        "nama" => "Lintang Rafdisiwi",
        "email" => "rafdi@gmail.com",
        "gambar" => "dua.png"
    ],
    [
        "nama" => "Ahmad Bejo",
        "nis"=>"227045",
        "email" => "ahmad@gmail.com",
        "jurusan"=>"Teknik Permesinan",
        "gambar" => "tiga.png"
    ]
];
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
    <?php foreach ($siswa as $siswa) : ?>
        <ul>
            <li>
                <img src="img/<?= $siswa['gambar'];?>" alt="">
            </li>
            <li>Nama: <?= $siswa["nama"] ?></li>
            <li>Nis: <?= $siswa["nis"] ?></li>
            <li>Email: <?= $siswa["email"] ?></li>
            <li>Jurusan: <?= $siswa["jurusan"] ?></li>
        </ul>
    <?php endforeach; ?>
</body>

</html>