$(document).ready(function(){
    $(document).on('click','#btn_comentario', function(e){
        e.preventDefault();
        var nombre = $('#name').val();
        var correo = $('#emailAddress').val();
        var telefono = $('#subject').val();
        var comentario = $('#message').val();
        var fec = new Date();
        var fecha = fec.getFullYear() + "-" + (fec.getMonth()+1) + "-" + fec.getDate();
        $.ajax({
            url: '../assets/funciones_php/funciones.php',
            type: 'POST',
            data: {
                'save': 1,
                'name': nombre,
                'email': correo,
                'phone': telefono,
                'comment': comentario,
                'date': fecha,
            },
            success: function(repuesta){
                $('#name').val('');
                $('#emailAddress').val('');
                $('#subject').val('');
                $('#message').val('');
                $('#area_comentario').append(repuesta);
            }
        })
    });
});