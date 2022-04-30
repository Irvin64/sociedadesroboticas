<?php
session_start();
$_SESSION['login_user'] = '';
$_SESSION['type_user'] = '';
$_CCOKIE['token'] = '';
$_SESSION['token'] = '';
setcookie('token', '', time()-1, "/");
session_destroy();
header('Location: ../index.html');


?>