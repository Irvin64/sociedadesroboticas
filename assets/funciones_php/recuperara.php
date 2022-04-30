<?php
    include_once './database.php';
    require_once './PHPMailer.php';
    require_once './SMTP.php';
    session_start();
    
    if(isset($_POST['email']) ){
        $server = new ConnectionServer();
        $conexion = $server->getConnection();
        $correo = $_POST['email'];
        $sql = "SELECT * FROM usuarios WHERE email='$correo'";
        $result = mysqli_query($conexion, $sql);
        $contar = mysqli_num_rows($result);
        if ($contar  == 1){
            $datos = mysqli_fetch_array($result, MYSQLI_ASSOC);

            //Creacion del token 
            $id=$datos["uid"];
            $nombre = $datos["nombre"];
            $apellido = $datos ["apellidos"];
            $token = base64_encode(sha1(uniqid(rand(),true)));
 

            ////
            try {

                $actualizar  = "UPDATE usuarios SET token = '$token' WHERE email = '$correo' ";
                $resultado = mysqli_query($conexion, $actualizar);
               
                ///se uso libreria de php mailer
                $mail = new PHPMailer(true);

                    //Server settings
                    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
                    $mail->isSMTP();                                            //Send using SMTP
                    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
                    $mail->SMTPAuth   = true;
                    ///correo existente                                   //Enable SMTP authentication
                    $mail->Username   = 'irvinphantom@gmail.com';
                    ///contraceña correcta                      //SMTP username
                    $mail->Password   = 'huevos19';                               //SMTP password
                    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
                    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
                
                    //Recipients
                    //aque correo lo vas a mandar 
                    $mail->setFrom('irvinphantom@gmail.com', 'PhantomTec');
                    $mail->addAddress($correo, $nombre);     //Add a recipient
                    //$mail->addAddress('ellen@example.com');               //Name is optional
                    //$mail->addReplyTo('info@example.com', 'Information');
                    //$mail->addCC('cc@example.com');
                    //$mail->addBCC('bcc@example.com');
                
                    //Attachments
                   // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
                    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name
                
                    //Content
                    $mail->isHTML(true);                                  //Set email format to HTML
                    $mail->Subject = 'Recuperar Password en phantomTec';
                    //cambiar la url cuando se suba al hosting
                    $mail->Body  = '<h3> Para recuperar una contraseña debes de seguir las siguientes indicaciones
                    </h3> <ul> <li> Dale click al enlace:  <b> <a href= "http://localhost/sociedades_roboticas/html/new_password.php ?token='.$token.'"> Aqui </li> <li>Guarda tu contraceña en el sitio. </li> <li>Inicia session nuevamente</li></ul>    </b>';
                    $mail->AltBody = 'Este es un correo de PhantomTec para recuperar tu contraseña';
                
                    $mail->send();
                    echo 'Message has been sent';
            }

            catch(Exception $e){
            
            }

            $server->closeConnection();
          
        }else{
            $server->closeConnection();
        }

    }
?>