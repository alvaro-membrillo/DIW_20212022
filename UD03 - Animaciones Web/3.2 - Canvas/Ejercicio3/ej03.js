console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 300;
canvas.height = 100;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Coordenadas del objeto
let x = 0;
let y = 10;

//-- Velocidades del objeto
let velx = 3;
let vely = 1;

let rebote = 0;

function generarNumero(numero) {
	return (Math.random() * numero).toFixed(0);
}

function colorRGB() {
	var coolor =
		"(" +
		generarNumero(255) +
		"," +
		generarNumero(255) +
		"," +
		generarNumero(255) +
		")";
	return "rgb" + coolor;
}

//-- Funcion principal de animacion
function update() {
	console.log("test");
	//-- Algoritmo de animacion:
	//-- 1) Actualizar posicion del  elemento
	//-- (física del movimiento rectilineo uniforme)

	let numero = Math.random();

	//-- Condicion de rebote en extremos verticales del canvas
	if (x < 0 || x >= canvas.width - 20) {
		if (rebote == 2) {
			velx = -velx / 4;
		} else {
			velx = -velx;
		}
		let color = colorRGB(numero);
		ctx.fillStyle = color;

		rebote += 1;
	}

	//-- Condición de rebote en extremos horizontales del canvas
	if (y <= 0 || y > canvas.height - 20) {
		if (rebote == 2) {
			vely = -vely / 4;
		} else {
			vely = -vely;
		}
		let color = colorRGB(numero);
		ctx.fillStyle = color;

		rebote += 1;
	}

	//-- Actualizar la posición
	x = x + velx;
	y = y + vely;

	//-- 2) Borrar el canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	//-- 3) Dibujar los elementos visibles
	ctx.beginPath();
	ctx.rect(x, y, 20, 20);

	//-- Rellenar
	ctx.fill();

	//-- Dibujar el trazo
	ctx.stroke();
	ctx.closePath();

	//-- 4) Volver a ejecutar update cuando toque
	requestAnimationFrame(update);
}

//-- ¡Que empiece la función!
update();
