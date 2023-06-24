export default function initTeste() {
  // console.log("Isso é teste");
}

// // // export function teste2() {
// // //   console.log("Isso é teste skjdljks");
// // // }

// // // const esseNome = "Andre";

// // // export const senha = 2928219082190;

// // // function espera(texto) {
// // //   console.log("testando2");
// // // }

// // // setTimeout(() => {
// // //   console.log("testando");
// // // }, 2000);

// // // for (let i = 0; i < 20; i++) {
// // //   setTimeout(() => {
// // //     console.log(i);
// // //   }, 300 * i);
// // // }

// // const botao = document.querySelector("#botao");
// // // console.log(botao);

// // botao.addEventListener("click", aoClick);

// // // O parametro em  forma de arrow function referencia o this ao botao , caso contrario referencia ao objeto window
// // function aoClick() {
// //   setTimeout(() => {
// //     this.classList.add("active");
// //     console.log(this);
// //   }, 2000);
// // }

// // // SETINTEVAL

// // // function loop(texto) {
// // //   console.log(texto);
// // // }
// // // setInterval(loop, 2000, "Passou 2s");

// // // let i = 0;
// // // setInterval(() => {
// // //   console.log(i++);
// // // }, 3000);

// // // let i = 0;

// // // const meuLoop = setInterval(() => {
// // //   console.log(i++);
// // //   if (i > 20) {
// // //     clearInterval(meuLoop);
// // //   }
// // // }, 300);

// // function mudarClasse() {
// //   document.body.classList.toggle("active");
// // }
// // setInterval(mudarClasse, 1000);

// // // Exercicio cronometro
// // captura dos elementos
// const iniciar = document.querySelector(".iniciar");
// const pausar = document.querySelector(".pausar");
// const tempo = document.querySelector(".tempo");

// // eventos
// iniciar.addEventListener("click", inicarCronometro);
// pausar.addEventListener("click", pausarCronometro);
// // evento de click duplo para resetar
// pausar.addEventListener("dblclick", resetarCronometro);

// // variavéis globais para uso nas funções
// let i = 0;
// let timer;

// // função para iniciar
// function inicarCronometro() {
//   timer = setInterval(() => {
//     tempo.innerText = i++;
//   }, 100);

//   iniciar.setAttribute("disabled", "");
// }

// // função para pausar

// function pausarCronometro() {
//   clearInterval(timer);
//   iniciar.removeAttribute("disabled");
//   // console.log("pausar");
// }

// // função para  resetar cronometro

// function resetarCronometro() {
//   tempo.innerText = 0;
//   i = 0;
//   // console.log("resetar");
// }
