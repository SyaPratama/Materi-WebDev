<?php
require_once __DIR__ . '/utility/function.php';
$id = $_GET["id"];
$query = "SELECT * FROM mahasiswa WHERE id = $id";
$mahasiswa = query($query)[0];

// Handle Ketika button update di click
if(isset($_POST["update"])){
  if(edit($_POST) > 0){
    echo "
    <script>
      alert('Berhasil Mengubah Data!');
      document.location.href = 'index.php';
    </script>     
    ";
} else {
  echo "
    <script>
      alert('Gagal Mengubah Data!');
    </script>     
    ";
}
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CRUD - Edit Mahasiswa</title>
    <!-- STYLE SHEET -->
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <div class="container">
      <h1>Ubah Mahasiswa</h1>

      <a href="index.php" class="back">Kembali Ke Halaman</a>
      <form action="" method="post" class="form-tambah">
        <input type="hidden" name="id" value="<?=$id?>">
        <div class="wrap-input">
          <label for="nama" class="label"
            >Nama <span class="star">*</span></label
          >
          <input
            type="text"
            name="nama"
            id="nama"
            autocomplete="off"
            value="<?=$mahasiswa["nama"]?>" 
          />
        </div>
        <div class="wrap-input">
          <label for="nis" class="label">Nis <span class="star">*</span></label>
          <input type="tel" name="nis" id="nis" autocomplete="off" value="<?=$mahasiswa["nis"]?>" />
        </div>
        <div class="wrap-input">
          <label for="jurusan" class="label"
            >Jurusan <span class="star">*</span></label
          >
          <input
            type="text"
            name="jurusan"
            id="jurusan"
            autocomplete="off"
            value="<?=$mahasiswa["jurusan"]?>"
          />
        </div>
        <div class="wrap-input">
          <label for="email" class="label"
            >Email <span class="star">*</span></label
          >
          <input
            type="email"
            name="email"
            id="email"
            autocomplete="off"
            value="<?=$mahasiswa["email"]?>"
          />
        </div>
        <div class="wrap-input">
            <button name="update" type="submit" onclick="return confirm('Apakah Anda Ingin Mengubah?')">Update Mahasiswa</button>
        </div>
      </form>
    </div>
  </body>
</html>
