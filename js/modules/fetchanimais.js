import initAnimaNumeros from "./numeros.js";

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const animaisReponse = await fetch(url);
      const animaisJSON = await animaisReponse.json();

      const numeroGrid = document.querySelector(".numeros-grid");
      // console.log(numeroGrid);

      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        // console.log(divAnimal);
        numeroGrid.appendChild(divAnimal);
      });

      initAnimaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  function createAnimal(animal) {
    // console.log(animal);
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
    // console.log(div);
  }

  fetchAnimais("./animaisapi.json");
}
