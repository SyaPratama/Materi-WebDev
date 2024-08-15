<style>
.lg {
    text-align: center;
}

.section-extra-margin {
    margin-top: 7rem;
}
</style>
<?php
require 'config/database.php';

// fetch current user from database
if(isset($_SESSION['user-id'])) {
  $id = filter_var($_SESSION['user-id'], FILTER_SANITIZE_NUMBER_INT);
  $query = "SELECT avatar FROM users WHERE id=$id";
  $result = mysqli_query($connection, $query);
  $avatar = mysqli_fetch_assoc($result);
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MURPH</title>

    <!-- WEBSITE ICON -->
    <link rel="shortcut icon" href="<?= ROOT_URL ?>images/website-icon.png" type="image/x-icon">

    <!--CSS STYLESHEET -->
    <link rel="stylesheet" type="text/css" href="<?= ROOT_URL?>css/style.css"/>


    <!--FONT GENERAL-->

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"
    />
    <!-- ICONSCOUT GENERAL -->
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
    />
  </head>
  <body>
    <nav>
      <div class="container nav-container">
        <div class="nav-logo"><a href="<?=ROOT_URL?>"><img id="logo" src="<?= ROOT_URL ?>images/logo.png"></a></div>
        <ul class="nav-items">
          <li><a href="<?=ROOT_URL?>">Home</a></li>
          <li><a href="<?=ROOT_URL?>blog.php">Blog</a></li>
          <li><a href="<?=ROOT_URL?>about.php">About</a></li>
          <li><a href="<?=ROOT_URL?>services.php">Services</a></li>
          <li><a href="<?=ROOT_URL?>contact.php">Contact</a></li>
          <?php if(isset($_SESSION['user-id'])) : ?>
            <li class="nav-profile">
            <div class="avatar">
              <img src="<?= ROOT_URL . 'images/' . $avatar['avatar'] ?>" />
            </div>
            <ul>
              <li><a href="<?=ROOT_URL?>admin/index.php">Dashboard</a></li>
              <li><a href="<?=ROOT_URL?>logout.php">Logout</a></li>
            </ul>
          </li>
          <?php else : ?>
          <li><a href="<?=ROOT_URL?>signin.php">Sign In</a></li>
         <?php endif ?>
        </ul>
        <button id="open-nav-btn"><i class="uil uil-bars"></i></button>
        <button id="close-nav-btn"><i class="uil uil-multiply"></i></button>
      </div>
    </nav>

    <!-- ========================================= END OF NAV =========================================-->