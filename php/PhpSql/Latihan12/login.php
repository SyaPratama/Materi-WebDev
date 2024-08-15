<?php
session_start();

// check cookie
if(isset($_COOKIE["SESSION_ID"]) && isset($_COOKIE["SESSION_KEY"])){
    $id = $_COOKIE["SESSION_ID"];
    $key = $_COOKIE["SESSION_KEY"];

    // ambil username berdasarkan id
    $result = mysqli_query($conn,"SELECT * username FROM user WHERE id = $id");
    $row = mysqli_fetch_assoc($result);

    // cek cookie dan username
    if($key === hash('sha256',$row["username"])){
        $_SESSION["SESSION_LOGIN"] = 'true';
    }
}

// Jika Sudah Login Maka Pindah Ke Index.php
if(isset($_SESSION["login"])){
    header('Location: index.php');
    exit;
}



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
            // set Sessions
            $_SESSION["SESSION_LOGIN"] = true;


            // cek remember me
            if(isset($_POST["remember"])){
                // buat cookie
                setcookie('SESSION_ID',$row['id'],time()+60);
                setcookie('SESSION_KEY',hash('sha256',$row["username"]),time()+60);
            }

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
            <li>
                <label for="remember">Remember Me</label>
                <input type="checkbox" name="remember" id="remember">
            </li>
            <li><button type="submit" name="login">Login</button></li>
        </ul>
    </form>
</body>

</html>