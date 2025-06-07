const btnAbrir = document.getElementById('abrirCardapio');
const modal = document.getElementById('modalCardapio');
const btnFechar = document.getElementById('fecharCardapio');

btnAbrir.addEventListener('click', () => {
    modal.style.display = 'flex';
});

btnFechar.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fechar o modal ao clicar fora do conteúdo
window.addEventListener('click', (e) => {
    if (e.target === modal) {
    modal.style.display = 'none';
    }
});

// Fechar com tecla ESC
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
    modal.style.display = 'none';
    }
});