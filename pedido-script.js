const WHATSAPP_NUMBER = '5521985201649'; // Substitua por seu número fixo com código do país.

function obterParametro(nome) {
    const params = new URLSearchParams(window.location.search);
    return params.get(nome) || '';
}

function preencherProduto() {
    const produto = obterParametro('produto');
    const produtoInput = document.getElementById('product');

    if (produto) {
        produtoInput.value = produto;
    } else {
        produtoInput.value = 'Nenhum produto selecionado';
    }
}

function enviarPedido(event) {
    event.preventDefault();
    const nome = document.getElementById('name').value.trim();
    const instagram = document.getElementById('instagram').value.trim();
    const produto = document.getElementById('product').value.trim();
    const quantidade = document.getElementById('quantity').value;
    const notas = document.getElementById('notes').value.trim();
    const result = document.getElementById('result');

    if (!produto || produto === 'Nenhum produto selecionado') {
        result.textContent = 'Por favor, volte ao catálogo e selecione um produto antes de enviar o pedido.';
        result.classList.add('visible');
        return;
    }

    const texto = encodeURIComponent(
        `Olá, gostaria de fazer um pedido:` +
        `\n*Nome:* ${nome}` +
        (instagram ? `\n*Instagram:* ${instagram}` : '') +
        `\n*Produto:* ${produto}` +
        `\n*Quantidade:* ${quantidade}` +
        (notas ? `\n*Observações:* ${notas}` : '')
    );

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`;
    window.open(url, '_blank');
    result.textContent = 'Abrindo o WhatsApp com seu pedido. Confirme e envie a mensagem.';
    result.classList.add('visible');
}

preencherProduto();