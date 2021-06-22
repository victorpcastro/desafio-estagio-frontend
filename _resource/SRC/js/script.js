const contact = {
    firstName: 'Victor',
    lastName: 'Castro'
};

const msg = `Olá, ${contact.firstName}. Tudo bem?
</br>
</br>
Para começar a Black Week BPO do Nibo, Eliandro Prado, sócio da OmegaPrice,
Pablo Goulart, Head de Vendas do Nibo, e Gabriel Gaspar, CEO do Nibo, vão bater
um papo ao vivo com dicas e estratégicas para vender BPO Financeiro.`;

setParagrafo(msg);

function setParagrafo (msg) {
    const paragrafo = document.querySelector('.descricao');
    paragrafo.innerHTML = '';
    const p = criaParagrafo();
    p.classList.add('paragrafo'); 
    p.innerHTML = msg;
    paragrafo.appendChild(p);
}

function criaParagrafo () {
    const p = document.createElement('p');
    return p;
}