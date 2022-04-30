//iniciar el jJQuery

$(document).ready(function() {
    ocultar();
    mostrar();
});


function ocultar() {
    setTimeout(function() {
    $('#parrafo1').hide(2000, function() {
        console.log("Y se marcho...");
    });
    }, 5000)
    flecha();
}
function mostrar() {
    setTimeout(function() {
        $('#parrafo2').show(1000, function(){
            console.log("Regresooo");
    });
    }, 2000)
}

function flecha() {
    const saludar = () => {
        console.log("BATMAAAAAN");
    };
    setTimeout(saludar, 2000);
    promesa1("https://www.google.com/search?q=hola");
}

//promesas
function promesa1(url) {
    const promise = fetch(url);
    promise.then(resultado => {
        console.log("Resultado: " + resultado)
        ocultar();
    })
    .catch(error => {
        console.log("Error: " + error);
    })
}
