// função para identificar click fora do dropdown
// foi criado uma segunda função que verifica o evento bubble, eevitando algum bug relaciona aos eventos de click

export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outsite";
  // veridicação para validar apenas um evento ao click no menu-dropdown
  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
    });
    // atributo adicionado que mostra quantos cliques no elemento
    element.setAttribute(outside, "");
  }

  function handleOutsideClick(event) {
    // verificação para identificar se o click está no elemento que ocorre o evento
    if (!element.contains(event.target)) {
      // remoção do atributo ao clicar fora do elemento
      element.removeAttribute(outside, "");
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });

      // console.log(element);
      callback();
    }
  }
}
