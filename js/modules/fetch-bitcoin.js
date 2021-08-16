export default function initFetchBitcoin(){
    fetch('https://www.blockchain.com/ticker')
        .then(response => response.json())
        .then((bitcoin) => {
            const btcPreco = document.querySelector('.btc');
            btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
        }).catch(err => console.log(Error(err)));
}