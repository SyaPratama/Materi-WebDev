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

    //  upload gambar
    $gambar = upload();
    if(!$gambar){
        return false;
    }
 
     // query insert data
     $query = "INSERT INTO siswa
               VALUES ('','$nama','$nis','$jurusan','$email','$gambar')";
     mysqli_query($conn, $query);

     return mysqli_affected_rows($conn);
}


function upload(){

    // $_FILES berupa array multidimension associative  
    $namaFile = $_FILES["gambar"]["name"];
    $ukuranFile = $_FILES["gambar"]["size"];
    $error = $_FILES["gambar"]["error"];    
    $tmpName = $_FILES["gambar"]["tmp_name"];

    // cek apakah tidak ada gambar yang diupload
    if($error === 4){
        echo "
            <script>
                alert('pilih gambar terlebih dahulu');
            </script>
        ";
        return false;
    }

    // cek apakah yang diupload adalah gambar
    $ekstensiImageValid = ['jpg','jpeg','png','webp'];
    // memecah ekstensi gambar string menjadi array
    $ekstensiImage = explode('.',$namaFile);

    // end untuk mengambil element terakhir array
    // strtolower mengubah string menjadi lowercase
    $ekstensiImage = strtolower(end($ekstensiImage));
    // in_array mencari value apakah ada di dalam sebuah array
    // parameter pertama adalah value yang ingin dicari
    // parameter kedua adalah array yang value nya ingin dicari
    if(!in_array($ekstensiImage,$ekstensiImageValid)){
        echo "
        <script>
            alert('hanya bisa mengupload image!');
        </script>
    ";
    return false; 
    }

    // cek jika ukuran image melebih kapasitas tertentu
    if($ukuranFile > 1000000){
        echo "
        <script>
            alert('Ukuran Gambar Harus Dibawah 1mb');
        </script>
    ";
    return false;
    }

    // lolos semua pengecekan gambar file siap upload
    // generate Nama Image Baru
    // uniqid -> untuk mengenerate string numeric random
    $namaFileBaru = uniqid();
    $namaFileBaru .= '.';
    $namaFileBaru .= $ekstensiImage;
    // untuk memindahkan file dari tempat file sementara ke tempat file yang kita inginkan
    move_uploaded_file($tmpName,'img/'.$namaFileBaru);
    return $namaFileBaru;
}



function hapus($nis){
    global $conn;
    $ambilFile = query("SELECT * FROM siswa WHERE nis = $nis")[0];
    $ambilFile = $ambilFile["gambar"];
    unlink('img/'.$ambilFile);
    mysqli_query($conn,"DELETE FROM siswa WHERE nis = $nis");
    return mysqli_affected_rows($conn);
}


function ubah($data){
    global $conn;

     // ambil data dari tiap element dalam forms
     $id = $data["id"]; 
     $nama = htmlspecialchars($data["nama"]);
     $nis = htmlspecialchars($data["nis"]);
     $jurusan = htmlspecialchars($data["jurusan"]);
     $email = htmlspecialchars($data["email"]);
     $gambarLama = $data["gambarLama"];

    //  mengecek apakah user mengupload gambar baru atau tidak
    if($_FILES["gambar"]["error"] === 4){
        $gambar = $gambarLama;
    }else if($_FILES["gambar"]["error"] === 0){
        unlink('img/'.$gambarLama);
        $gambar = upload();
    }

    // Update Data
    $query = "UPDATE siswa SET 
              nama = '$nama',
              nis = '$nis',
              jurusan = '$jurusan',
              email = '$email',
              gambar = '$gambar' 
              WHERE id=$id";
    mysqli_query($conn,$query);
    return mysqli_affected_rows($conn);
}


function cari($keyword){
    // wild cart % %
    $query = "SELECT * FROM siswa WHERE nama LIKE '%$keyword%' OR nis LIKE '%$keyword%' OR email LIKE '%$keyword%' OR jurusan LIKE '%$keyword%' ";
    return query($query);
}



