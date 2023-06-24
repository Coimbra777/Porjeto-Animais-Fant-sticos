import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  // SELEÇÃO DE ELEMENTOS PARA MANIPULAÇÃO
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  // VARIÁVEL PARA ARMAZENAR EVENTOS
  const eventos = ["click", "touchstart"];

  // FUNÇÃO PARA ABRIR E FECHAR MENU MOBILE
  // VERIFICAÇÃO PARA CASO NÃO EXISTA MENU
  if (menuButton) {
    function openMenu(event) {
      menuList.classList.add("active");
      menuButton.classList.add("active");
      outsideClick(menuList, eventos, () => {
        // console.log("teste");
        menuList.classList.remove("active");
        menuButton.classList.remove("active");
      });
    }
    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));
  }
}
