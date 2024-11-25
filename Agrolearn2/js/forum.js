document.getElementById('botaoEnviar').addEventListener('click', enviarMensagem);

// Permitir envio com tecla Enter
document.getElementById('entradaMensagem').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        enviarMensagem();
    }
});

// Função para enviar mensagem
function enviarMensagem() {
    const entradaMensagem = document.getElementById('entradaMensagem');
    const mensagensDiv = document.getElementById('mensagens');
    const mensagem = entradaMensagem.value;

    if (mensagem.trim() !== '') {
        
        const novaMensagem = document.createElement('div');
        const isUsuario = mensagensDiv.childNodes.length % 2 === 0; 
        novaMensagem.classList.add('mensagem', isUsuario ? 'direita' : 'esquerda');
        novaMensagem.textContent = mensagem;

        mensagensDiv.appendChild(novaMensagem);

     
        setTimeout(() => {
            novaMensagem.style.opacity = "1";
            novaMensagem.style.transform = "translateY(0)";
        }, 50);

        entradaMensagem.value = ''; 
        mensagensDiv.scrollTop = mensagensDiv.scrollHeight; 
    }
}
