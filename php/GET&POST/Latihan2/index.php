<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>POST</title>
</head>

<body>
    <!-- Check Apakah Tombol Submit Pernah Di Click -->
    <?php if(isset($_POST["submit"]) && $_POST["nama"] !== ""): ?>
        <h1>Halo,Selamat Datang <?= $_POST["nama"] ?></h1>
    <?php endif;?>
    <form action="" method="post">
        <div>
            <label for="nama">Masukkan Nama</label>
            <!-- name sebagai key untuk Variable Global $_POST -->
            <input type="text" name="nama" id="nama">
        </div>
        <div>
            <label for="email">Masukkan Email</label>
            <input type="email" name="email" id="email">
        </div>
        <button type="submit" name="submit">Kirim!</button>
    </form>
</body>

</html>