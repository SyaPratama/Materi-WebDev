<?php
require_once('config/config.php');

function query($query){
    global $conn;
    $data = mysqli_query($conn, $query);
    $result = mysqli_fetch_all($data, MYSQLI_ASSOC);
    return $result;
}

function tambah($data){
    global $conn;
    $nama = htmlspecialchars($data["nama"]);
    $nis = (int)(htmlspecialchars($data["nis"]));
    $jurusan = htmlspecialchars($data["jurusan"]);
    $email = htmlspecialchars($data["email"]);
    // check apakah nama user sudah ada atau belum
    if (count(query("SELECT * FROM mahasiswa WHERE nama = '$nama' OR nis = $nis")) > 0) {
        return false;
    }
    $query = "INSERT INTO mahasiswa VALUES(0,'$nama','$jurusan','$email',$nis)";
    mysqli_query($conn,$query);
    return mysqli_affected_rows($conn);
}

function edit($data){
    global $conn;
    $id = $data["id"];
    $nama = htmlspecialchars($data["nama"]);
    $nis = (int)(htmlspecialchars($data["nis"]));
    $jurusan = htmlspecialchars($data["jurusan"]);
    $email = htmlspecialchars($data["email"]);
    $query = "UPDATE mahasiswa SET 
              nama = '$nama',
              jurusan = '$jurusan',
              email = '$email',
              nis = $nis WHERE id = $id
              ";
    mysqli_query($conn,$query);
    return mysqli_affected_rows($conn);
}

function delete($id){
    global $conn;
    $query = "DELETE FROM mahasiswa WHERE id = $id";
    mysqli_query($conn,$query);
    return mysqli_affected_rows($conn);
}

function cari($keyword){
    $query = "SELECT * FROM mahasiswa WHERE nama LIKE '%$keyword%'";
    $result = query($query);
    return $result;
}