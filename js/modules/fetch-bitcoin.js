export default function initFetchBitcoin() {}

fetch("https://blockchain.info/ticker")
  .then((response) => response.json())
  .then((json) => {
    const btcPReco = document.querySelector(".btc-preco");
    btcPReco.innerText = (1000 / json.BRL.sell).toFixed(4);
    // console.log(json.BRL.sell);
  })
  .catch((erro) => {
    console.log(Error(erro));
  });
