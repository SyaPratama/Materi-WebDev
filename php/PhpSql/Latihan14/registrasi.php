<?php
require 'functions.php';
// cek apakah tombol register sudah di tekan
if(isset($_POST["register"])){

    if(register($_POST) > 0){
        echo "
            <script>alert('Berhasil Membuat User!')</script>
        ";
    }else{
        echo mysqli_error($conn);
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman Registrasi</title>
    <style>
        label{
            display: block;
        }
    </style>
</head>
<body>
    <h1>Halaman Registrasi</h1>

    <form action="" method="post">
        <ul>
            <li>
                <label for="username">Username: </label>
                <input type="text" name="username" id="username">
            </li>
            <li>
                <label for="password">Password: </label>
                <input type="password" name="password" id="password">
            </li>
            <li>
                <label for="confirmPassword">Confirmasi Password: </label>
                <input type="password" name="confirm" id="confirmPassword">
            </li>
            <li>
                <button type="submit" name="register">Registrasi!</button>
            </li>
        </ul>
    </form>
</body>
</html>