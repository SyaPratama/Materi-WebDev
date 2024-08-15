<?php
// connection to database
$connection = mysqli_connect("localhost", "root", "", "phpdasar");

// Ambil data dari table mahasiswa () -> Query Data
$result = mysqli_query($connection, 'SELECT * FROM siswa');

// ambil data (fetch) siswa dari object result
// mysqli_fetch_row() -> mengembalikan array numerik
// mysqli_fetch_assoc() -> mengembalikan array associative
// mysqli_fetch_array() -> mengembalikan array numerik & array associative (double) 
// mysqli_fetch_object() -> mengembalikan object dan memanggil seperti object
// mysqli_fetch_all() -> mengambil semua isi dan dapat berupa assoc,numeric,object dll berdasarkan parameter kedua (option) 

// $person = mysqli_fetch_row($result);
// $person = mysqli_fetch_array($result);
// $person = mysqli_fetch_object($result);

// Use While
// while($person = mysqli_fetch_assoc($result)){
//     var_dump($person["nama"]);
// }

// Use Fetch All

// $person = mysqli_fetch_all($result,MYSQLI_ASSOC);
// var_dump($person);

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman Admin</title>
</head>

<body>
    <h1>Daftar Mahasiswa</h1>

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
            <?php while($row = mysqli_fetch_assoc($result)) : ?>
            <tr>
                <td><?=$i?></td>
                <td>
                    <a href="">Change</a>
                    <a href="">Delete</a>
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
            <?php endwhile; ?>
        </tbody>
    </table>
</body>

</html>