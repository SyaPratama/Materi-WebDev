<?php
require 'config/constants.php';

$username_email = $_SESSION['signin-data']['username_email'] ?? null;
$password = $_SESSION['signin-data']['password'] ?? null;

unset($_SESSION['signin-data']);
?>



<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MURPH</title>

    <!-- WEBSITE ICON -->
    <link rel="shortcut icon" href="images/website-icon.png" type="image/x-icon">

    <!--CSS STYLESHEET -->
    <link rel="stylesheet" href="<?= ROOT_URL?>css/style.css"/>

    <!--FONT GENERAL-->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    <!-- ICONSCOUT GENERAL -->
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
  </head>
  <body>


  <section class="form-section">
    <div class="container form-section-container">
      <h2>Sign In</h2>
      <?php if(isset($_SESSION['signup-success'])) : ?>
        <div class="alert-message success">
            <?= $_SESSION['signup-success'];
            unset($_SESSION['signup-success']);
          ?>
      </div>
      <?php elseif (isset($_SESSION['signin'])) : ?>
      <div class="alert-message error">
            <?= $_SESSION['signin'];
            unset($_SESSION['signin']);
          ?>
      </div>
      <?php endif ?>
      <form action="<?= ROOT_URL ?>signin-logic.php" method="POST">
        <input type="text" name="username_email" value="<?= $username_email ?>" placeholder="Userame or Email">
        <input type="text" name="password" value="<?= $password ?>" placeholder="Password">
        <button type="submit" name="submit" class="btn">Sign In</button>
        <small>Don't have account? <a href="signup.php">Sign Up</a></small>
      </form>
    </div>
  </section>


</body>
</html>