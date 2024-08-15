<?php
require_once __DIR__ . '/utility/function.php';
// Handle Ketika Tombol Di Tambah Di Click
if (isset($_POST["tambah"])) {
  if (tambah($_POST) > 0) {
    echo "
      <script>
        alert('Berhasil Menambahkan Akun!');
      </script>     
      ";
  } else {
    echo "
      <script>
        alert('Gagal Menambahkan Akun!');
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
  <title>CRUD - Tambah Mahasiswa</title>
  <!-- STYLE SHEET -->
  <link rel="stylesheet" href="css/style.css" />
</head>

<body>
  <div class="container">
    <h1>Tambah Mahasiswa</h1>

    <a href="index.php" class="back">Kembali Ke Halaman</a>
    <form action="" method="post" class="form-tambah">
      <div class="wrap-input">
        <label for="nama" class="label">Nama <span class="star">*</span></label>
        <input
          type="text"
          name="nama"
          id="nama"
          required />
      </div>
      <div class="wrap-input">
        <label for="nis" class="label">Nis <span class="star">*</span></label>
        <input type="tel" name="nis" id="nis" required />
      </div>
      <div class="wrap-input">
        <label for="jurusan" class="label">Jurusan <span class="star">*</span></label>
        <input
          type="text"
          name="jurusan"
          id="jurusan"

          required />
      </div>
      <div class="wrap-input">
        <label for="email" class="label">Email <span class="star">*</span></label>
        <input
          type="email"
          name="email"
          id="email"

          required />
      </div>
      <div class="wrap-input">
        <button name="tambah" type="submit">Buat Mahasiswa</button>
      </div>
    </form>
  </div>
</body>

</html>