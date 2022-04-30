$(document).ready(()=>{

    $('#login').click(()=>{
        let correo = $("#floatingInput").val();
        let password = $("#floatingPassword").val();
        let datos = 'email='+correo+'&password='+password;
        if ($.trim(correo).length > 0 && $.trim(password).length > 0){
            $.ajax({
                type: "POST",
                url: '../assets/funciones_php/logina.php',
                data: datos,
                beforeSend: ()=>{
                    $('#respuesta').html('<span style="color:orange;">Cargando....</span>');
                },
                success: (response)=>{
                    if (response){
                        $("#respuesta").html(
                            '<span style="color;green;">Correcto, Redirigiendo....</span>'
                        );
                        setTimeout(()=>{
                            window.location.href="../html/admin/index.php";
                        }, 3000);
                    }else{
                        $("#respuesta").html(
                            '<span style="color:red;"> Email o contraseña incorrecta</span>'
                        );
                        setTimeout(()=>{
                            $("#respuesta").html('&copy; 2017–2021');
                        }, 40000);
                    }
                }
            });
        }else{
            $("#respuesta").html(
                '<span style="color:red;"> Email o contraseña incorrecta</span>'
            );
            setTimeout(()=>{
                $("#respuesta").html('&copy; 2017–2021');
            }, 40000);
        }
    });

    $('#send_email').click(() => {

        let correo = $("#floatingInput").val();

        let datos = 'email='+correo;
        if ($.trim(correo).length > 0 ){

    
            $.ajax({
                type: "POST",
                url: "../assets/funciones_php/recuperara.php",
                data: datos,
                beforeSend: ()=>{
                    $('#respuesta').html ('<span style= "color:#00cc00;">Enviando correo...</span>');
                },
                success: (dates)=>{
                    if (dates){
                        $("#respuesta").html(
                            '<span style="color:green;"> Correcto correo enviado</span>'
                        );
                        setTimeout(()=>{
                           //swindow.location.href = '../html/admin/index.php';
                        },3000);
    
                    }else{
                        $("#respuesta").html(
                            '<span style ="color:red;">Email  Incorrect or not registered.</span>'
                      );
                      setTimeout(() => {
                        $("#respuesta").html("&copy; 2017 2021");
                      },4000);
                    }
                }
            });
        }else{
            $("#respuesta").html(
                '<span style ="color:red;">Email Incorrect.</span>'
          );
          setTimeout(() => {
            $("#respuesta").html("&copy; 2017 2021");
    
          },4000);
        }
    });

    $('#new_pass').click(() => {
        let id = $('#uid').val();
        let pass = $("#new_password").val();
        let datos = 'new_password='+pass+'&id='+id;
        if ($.trim(pass). length > 0 ){
    
            $.ajax({
                type: "POST",
                url: "../assets/funciones_php/save_new_pass.php",
                data: datos,
                beforeSend: ()=>{
                    $('#respuesta').html ('<span style= "color:#00cc00;">Enviando correo...</span>');
                },
                success: (dates)=>{
                    if (dates){
                        $("#respuesta").html(
                            '<span style="color:green;"> Contraseña guardada correctamente</span>'
                        );
                        setTimeout(()=>{
                          window.location.href = '..assets/html/admin/index.html';
                        },3000);
    
                    }else{
                        $("#respuesta").html(
                            '<span style ="color:red;">Error, no se cambio la contraseña.</span>'
                      );
                      setTimeout(() => {
                        $("#respuesta").html("&copy; 2017 2021");
    
                      },4000);
                    }
                }
            });
        }else{
            $("#respuesta").html(
                '<span style ="color:red;">Email or Password In correct.</span>'
          );
          setTimeout(() => {
            $("#respuesta").html("&copy; 2017 2021");
    
          },4000);
        }
    });
})