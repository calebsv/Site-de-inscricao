const form = document.getElementById('inscrição');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    mensagem.textContent = `Obrigado por se inscrever, ${nome}! Entraremos em contato em breve.`;
    form.reset();
})