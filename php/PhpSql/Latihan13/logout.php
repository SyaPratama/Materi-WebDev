<?php
session_start();
$_SESSION = []; 
session_unset();
session_destroy();

setcookie('SESSION_ID','',time() - 3600);
setcookie('SESSION_KEY','',time() - 3600);

header('Location: login.php');