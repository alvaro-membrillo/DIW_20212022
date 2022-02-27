/*
//Para inicializar select
document.addEventListener("DOMContentLoaded", function () {
	var elems = document.querySelectorAll("select");
	M.FormSelect.init(elems);
});
*/
// Para imagenes aleatorias
fetch("https://dog.ceo/api/breeds/image/random")
	.then((response) => {
		if (response.ok) {
			return response.json();
		}
	})
	.then((data) => {
		procesarJson(data);
	})
	.catch((err) => console.log(err));

function procesarJson(perro) {
	let img = document.createElement("img");
	img.src = perro.message;
	img.height = "110";
	img.width = "200";

	document.getElementById("random").appendChild(img);
}

// function seleccion() {
fetch("https://dog.ceo/api/breeds/list/all")
	.then((response) => {
		if (response.ok) {
			return response.json();
		}
	})
	.then((data) => {
		createBreedList(data.message);
		// loadByBreed(data.message);
	})
	.catch((err) => console.log(err));
// }

function createBreedList(breedList) {
	let select = document.getElementById("breed");
	select.innerHTML = `<select onchange="loadByBreed(this.value)">
	${Object.keys(breedList)
		.map(function (breed) {
			return `<option>${breed}</option>`;
		})
		.join("")}
		</select>
		<label>Selecciona una raza de perro</label>`;
	$(document).ready(function () {
		$("select").formSelect();
	});
}

function loadByBreed(breed) {
	fetch(`https://dog.ceo/api/breed/${breed}/images`)
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
		})
		.then((data) => {
			createCard(data.message);
		})
		.catch((err) => console.log(err));
}

function createCard(images) {
	document.getElementById("dog").innerHTML = `		
		<img class="col s2" src="${images[0]}" alt="Perro" title="${images[0]}" />
	  `;
}
