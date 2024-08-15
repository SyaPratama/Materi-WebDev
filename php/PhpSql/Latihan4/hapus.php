<?php
require 'functions.php';
$nis = $_GET["nis"];
if (hapus($nis) > 0) {
    echo "
    <script>
    alert('Data Berhasil Dihapus!');
    document.location.href = 'index.php';
    </script>
";
} else {
    echo "
<script>
alert('Data Gagal Dihapus!');
document.location.href = 'index.php';
</script>
";
}

?>
