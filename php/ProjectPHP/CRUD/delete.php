<?php
require_once __DIR__ . '/utility/function.php';

$id = $_GET["id"];
if (delete($id) > 0) {
    echo "
    <script>
      alert('Berhasil Menghapus Mahasiswa!');
      document.location.href = 'index.php';
    </script>     
    ";
} else {
    echo "
    <script>
      alert('Gagal Menghapus Mahasiswa!');
      document.location.href = 'index.php';
    </script>     
    ";
}
