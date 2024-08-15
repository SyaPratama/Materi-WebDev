<?php
// connection to database
$conn = mysqli_connect("localhost", "root", "", "phpdasar");

function query($query){
    global $conn;
    $result = mysqli_query($conn,$query);
    $rows = [];
    while($row = mysqli_fetch_assoc($result)){
            $rows[] = $row;
    }
    return $rows;
}



function tambah($data){
    global $conn;
     // ambil data dari tiap element dalam forms
     $nama = htmlspecialchars($data["nama"]);
     $nis = htmlspecialchars($data["nis"]);
     $email = htmlspecialchars($data["email"]);
     $jurusan = htmlspecialchars($data["jurusan"]);
     $gambar = htmlspecialchars($data["gambar"]);
 
     // query insert data
     $query = "INSERT INTO siswa
               VALUES ('','$nama','$nis','$jurusan','$email','$gambar')";
     mysqli_query($conn, $query);

     return mysqli_affected_rows($conn);
}


function hapus($nis){
    global $conn;
    mysqli_query($conn,"DELETE FROM siswa WHERE nis = $nis");
    return mysqli_affected_rows($conn);
}