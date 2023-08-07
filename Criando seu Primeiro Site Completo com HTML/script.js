// Seleciona todos os links com a classe 'smooth-scroll'
const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

// Adiciona um evento de clique a cada link
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Impede o comportamento padrão de clicar em um link
        
        const targetId = link.getAttribute('href'); // Obtém o valor do atributo href
        
        // Usa o método scrollTo para rolar suavemente até o elemento de destino
        window.scrollTo({
            top: document.querySelector(targetId).offsetTop,
            behavior: 'smooth'
        });
    });
});
