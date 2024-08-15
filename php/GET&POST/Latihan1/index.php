<?php
// $_GET
// Method Request Get adalah method Pengiriman Data melalui URL Yang Dapat Diterima Oleh Method SuperGlobals GET
// Mengisi Global Variable $_GET Secara Array Associative
// $_GET["nama"] = 'Rasya Putra Pratama';
// $_GET["nis"] = 227118;

// Mengisi Global Dengan URL
// index.php?nama=Rasya%20Putra%20Pratama&nis=227118
// var_dump($_GET);


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
        "nis" => "227045",
        "email" => "ahmad@gmail.com",
        "jurusan" => "Teknik Permesinan",
        "gambar" => "tiga.png"
    ]
];
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GET</title>
</head>

<body>
    <h1>Daftar Siswa SMK</h1>
    <ul>
        <?php foreach ($siswa as $person): ?>
            <li>
                <a href="detail.php?nama=<?=$person["nama"]?>&nis=<?=$person["nis"]?>&email=<?=$person["email"]?>&jurusan=<?=$person["jurusan"]?>&gambar=<?=$person["gambar"]?>"><?=$person["nama"];?></a></li>
        <?php endforeach; ?>
    </ul>
</body>

</html>