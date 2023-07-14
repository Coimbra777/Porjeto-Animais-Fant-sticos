export default function initTooltip() {}

// SELEÇÃO DO ELEMENTO PARA CRIAR TOOLTIP
const tooltips = document.querySelectorAll("[ data-tooltip]");

tooltips.forEach((item) => {
  item.addEventListener("mouseover", onMouseOver);
});

// FUNÇÃO PARA ADICIONAR E REMOVER TOOLTIP EM RELAÇÃO À PÁGINA
function onMouseOver() {
  const tooltipBox = criarTooltipBox(this);
  // tooltipBox.style.top = e.pageY + "px";
  // tooltipBox.style.left = e.pageX + "px";
  onMouseMove.tooltipBox = tooltipBox;
  this.addEventListener("mousemove", onMouseMove);

  onMouseLeave.tooltipBox = tooltipBox;
  onMouseLeave.element = this;
  this.addEventListener("mouseleave", onMouseLeave);
}

// objeto para evento remoção da tooltip
const onMouseLeave = {
  // element: "",
  // tooltipBox: "",
  handleEvent() {
    this.tooltipBox.remove();
    this.element.removeEventListener("mouseleave", onMouseLeave);
    this.element.removeEventListener("mousemove", onMouseMove);
  },
};

// função para movimentar tooltip com mouse

const onMouseMove = {
  handleEvent(event) {
    this.tooltipBox.style.top = event.pageY + 20 + "px";
    this.tooltipBox.style.left = event.pageX + 20 + "px";
  },
};

// FUNÇAÕ PARA CRIAR DIV ELEMENTO TOOLTIP

function criarTooltipBox(element) {
  const tooltipbox = document.createElement("div");
  const text = element.getAttribute("aria-label");
  tooltipbox.classList.add("tooltip");
  tooltipbox.innerText = text;
  document.body.appendChild(tooltipbox);
  return tooltipbox;
}
// console.log(tooltips);
