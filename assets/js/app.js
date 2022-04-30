
setTimeout(function(){
	modificarDom();
}, 3000);

function modificarDom(){
	var form = document.getElementById("formulario");
	form.style.backgroundColor = "#e5e5e5";

/* 	let copyright = document.getElementById("emailAddress");
	emailAddress.style.color = "black";

	input = document.getElementById("name");
	input.style.color = "black"; */

	const inputs = document.getElementsByClassName("contact-form");
	for(i = 0; i < inputs.length; i++){
		console.log(inputs[i]);
	}
	inputs[0].style.textAlign = "center";

	const nombres = document.getElementsByName("nombre");
	nombres[0].style.fontSize = "16px"

	/* const parrafos = document.getElementsByTagName("p");
	for(var i = 0; i < parrafos.length; i++){
		parrafos[i].style.fontStyle = "italic";
	} */

	const querys = document.querySelector(".contact-form"); //es la  primer clase de css
	querys.style.fontFamily = "verdana";

/* 	const avanzado = document.querySelector(".contact-form #name");
	avanzado.style.borderColor = "blue";
	avanzado.style.borderWidth = "3px"; */

/*	const divs = document.querySelectorAll("div");
	const clases = document.querySelectorAll(".contact-form")
	const nicknames = document.querySelectorAll('[name = "nombre"]');
	divs[2] =.style.textShadow = "3px 3px 3px orange";
	clases[0] =.style.textShadow = "3px 3px 3px purple";
	nicknames[0] =.style.textShadow = "3px 3px 3px pink";*/

	const parrafo = document.createElement("p");

	const span = document.createElement("span");

	const texto = document.createTextNode("Hola Ings");
	const comentario = document.createComment("Comenario");

	const clon = parrafo.cloneNode();
	clon.textContent = "Clon del primer parrafo";

	parrafo.id = "parrafo_nodo";
	parrafo.className = "title"; //debe existir en CSS
	parrafo.style = "color: red; fontSize: 25px;";

	console.log(parrafo.isConenected());

	const bloqe = document.getElementById("bloque");
	parrafo.textContent = "Este es un parrafo";
	bloqe.style.width = "90%";
	bloqe.style.height = "200px";
	bloqe.appendChild(parrafo);
	bloqe.innerHTML = '<span>Hola mundo</span>';
	bloqe.innerHTML = "HOLA MUNDO";
	bloqe.appendChild(span);
	bloqe.appendChild(texto);
	bloqe.appendChild(comentario);

}

const boton = document.createElement("input");
boton.id = "boton";
boton.value = "Aparecer imgen";
boton.type = "button";
bloqe.appendChild(boton);
boton.addEventListener("click", function(e){
	e.preventDefault();
	aparecerImagen();
});

function aparecerImagen(){
	const imagen = document.createElement("img");
	imagen.src = "../assets/img/bg_image_1.jpg";
	imagen.style ="width:100px; height:100px; border:none;";
	imagen.alt = "imagen";
	let contenedor = document.createElement("div");
	contenedor.id = "div-imagen";
	contenedor.appendChild(imagen);
	document.getElementById("bloque").appendChild(contenedor);
	const boton2 = document.createElement("input");
	boton2.id = "boton2";
	boton2.value = "Borrar imagen";
	boton2.type = "button";
	bloqe.appendChild(boton2);
	boton2.addEventListener("click", function(e) {
		e.preventDefault();
		borrarImagen();
		boton2.remove();
	});
}

//mostrar y ocultar tesla bot----------------------
function mostrar_imagen(id) {
   img = document.getElementById(id);
   img.innerHTML = '<img src="https://idlesocietycouk.files.wordpress.com/2021/08/tesla.bot1_.jpg?strip=info&w=600" alt="" width="250" height="350"/>';
}
function ocultar_imagen(id) {
    img = document.getElementById(id);
    img.innerHTML = '';
}

function ponerEstilo(){
	const parrafo = document.querySelector(".estilo1");
	console.log(parrafo);
	parrafo.className = "estilo1 estilo2 estilo3";
	console.log(parrafo.className);
}

function quitarEstilo(){
	const classess = document.querySelector(".estilo1");
	console.log("classess");
	classess.classList.remove("estilo3");
	console.log(classess);
}