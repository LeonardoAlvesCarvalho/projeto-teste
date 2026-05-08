function filtrar(categoria) {
    const cards = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach(card => {
        if (categoria === 'todos' || card.getAttribute('data-categoria') === categoria) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function irParaPedido(botao) {
    const card = botao.closest('.product-card');
    const nomeProduto = card.querySelector('.product-name').textContent;
    window.location.href = `pedido.html?produto=${encodeURIComponent(nomeProduto)}`;
}