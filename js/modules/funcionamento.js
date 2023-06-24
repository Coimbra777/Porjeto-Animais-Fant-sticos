export default function initFuncionamento() {
  // SELEÇÃO DOS ELEMENTOS
  const funcionamento = document.querySelector("[data-semana]");
  // TRANSFORMA O ELEMENTO EM UM ARRAY COM NÚMEROS
  const diaSemana = funcionamento.dataset.semana.split(",").map(Number);
  // TRANSFORMA O HORÁRIO EM ARRAY COM NÚMEROSDD
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  console.log(diaSemana);
  console.log(horarioSemana);

  // CONSTROI UMA DATA
  const dataAgora = new Date();
  // CAPTURA DIA E HORA DO OBJ DATE
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  //verificação para saber dia da semana
  const semanaAberto = diaSemana.indexOf(diaAgora) !== -1;
  // verifiação para saber horario de funcionamento
  const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < 18;
  // verificação para saber se está aberto ou fechado o estabelecimento
  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
    // console.log("horario aberto");
  }
}
