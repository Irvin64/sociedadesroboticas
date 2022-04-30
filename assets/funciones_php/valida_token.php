<?php
session_start();
if (!isset($_SESSION['token']) || !isset($_COOKIE['token']) || $_SESSION['token'] != $_COOKIE['token']){
    session_destroy();
    $_SESSION['token'] = "";
    setcookie('token', "", time()-1, "/");
    //header("Location: ../index.html");
}
?>