<?php
$conexion = mysqli_connect('localhost', 'root', '','sociedades_bd');
if (!$conexion){  
  die('Conexion failed'. mysqli_error($conexion));
}
if(isset($_POST['save'])){
  $nom = $_POST['name'];
  $correo = $_POST['email'];
  $tel = $_POST['phone'];
  $comen = $_POST['comment'];
  $fecha = $_POST['date'];

  $insertar = "INSERT INTO comentarios (nombre, fecha, comentario, correro, telefono)
  VALUES ('{$nom}', '{$fecha}', '{$comen}', '{$correo}', '{$tel}')";
  if(mysqli_query($conexion, $insertar)){
    $id = mysqli_insert_id($conexion);
    $guardado = '
    <article>
    <header>
    <figure> </figure>
    <address>
    Nombre: <a href="#"><a>"'.$nom.'"</a>
    </address>
    Fecha: <time datetime="2045-04-06t08:15+00:00"> "'.$fecha.'" </time>
    </header>
    <disv class="comment">
    Comentario: <p>"'.$comen.'"</p> 
    </div>
    </article>
    ';
    echo $guardado;
  }else{
    echo "Error: ".mysqli_error($conexion);
  }
  exit();
}

$consulta = "SELECT * FROM comentarios";
$resultado = mysqli_query($conexion, $consulta);
$mostrar = "";
while ( $fila = mysqli_fetch_array($resultado)){
  $mostrar .= '
  <article>
  <header>
  <figure class="avatar">
  <img src="../assets/img/user.png" style="height:40; width:40px">
  </figure>
  <address>
  <a href="#"><a><b> Nombre: </b>"'.$fila['nombre'].'"</a>
  </address>
  <time datetime="2045-04-06t08:15+00:00"><b>Fecha: </b>"'.$fila['fecha'].'" </time>
  </header>
  <div class="comment">
  <p><b>Comentario: </b>"'.$fila['comentario'].'"</p>
  </div>
  </article>
  ';
}

?>