<?php
require 'functions.php';
if (isset($_POST["login"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $check = mysqli_query($conn,"SELECT * FROM user WHERE username = '$username'");

    // cek username
    // mysqli_num_rows untuk mengecek ada berapa baris yang dikembalikan
    if(mysqli_num_rows($check) === 1){
        // cek password
        $row = mysqli_fetch_assoc($check);
        if(password_verify($password,$row["password"])){
            header('Location: index.php');
            // menghentikan script di baris ini saja
            exit;
        }
    }

    $error = true;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman Login</title>
</head>

<body>
    <h1>Halaman Login</h1>

    <?php if(isset($error)):?>
        <p style="color: red;font-style:italic;font-weight:600;">username/password salah</p>
    <?php endif?>
    <form action="" method="post">
        <ul>
            <li>
                <label for="username">Username</label>
                <input type="text" name="username" id="username">
            </li>
            <li>
                <label for="password">Password</label>
                <input type="password" name="password" id="password">
            </li>
            <li><button type="submit" name="login">Login</button></li>
        </ul>
    </form>
</body>

</html>