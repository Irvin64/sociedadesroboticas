<?php
if(empty($_GET['token'])){
  header("Location: login.php");
}
?>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.84.0">
    <title>New Password</title>

  </head>
  <body class="text-center">
    
<main class="">

    <?php
      include("../assets/funciones_php/database.php");
      $token = $_GET['token'];
      $server = new ConnectionServer();
        $conexion = $server->getConnection();
        
        $sql = "SELECT * FROM usuarios WHERE token='$token'";
        $result = mysqli_query($conexion, $sql);
        $contar = mysqli_num_rows($result);
        if ($contar  == 1){
          $datos = mysqli_fetch_array($result, MYSQLI_ASSOC);

          $uid=$datos["uid"];

        echo ' 
        <form class="formulario">
        <img class="mb-4" src="../assets/img/user.png" alt="" width="80" height="100">
        <h1 class="h3 mb-3 fw-normal">Coloca tu nueva contraseña</h1>
        <h3>Bienvenido '.$datos['nombre'].'</h3>
        
        <input type="hidden" name="id" value="'.$uid.'" id="uid">

        <div class="">
          <input type="password" placeholder="Contraseña" class="" id="new_password">
        </div>
    
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        
        <input type="button" value="Nueva contraseña" id="new_pass">
    
        <div class="form-floating">
        </div>

        <p class="mt-5 mb-3 text-muted" id="respuesta"></p>
      </form>';
      }else{
        echo '<h3>Ocurrio un error, vuelve a intenatarlo mas tarde</h3>';
      }
      mysqli_close($conexion);
   ?>
   
</main>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>    
<script src="../assets/js/jquery-3.5.1.min.js"></script>
<script src="../assets/js/admin_login.js"></script>

  </body>
</html>
