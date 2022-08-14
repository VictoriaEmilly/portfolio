window.sr=ScrollReveal({reset: true});

var slide = {
    distance: '40px',
    duration: 2500,
    delay:400
};

var slideHome= {
    distance: '20px',
    duration: 2500,
    delay:400
};
sr.reveal('.sessao-b-texto,.titulo3',slide,{delay: 300, origin:'right'});
sr.reveal('#victoria,.sessao-c-habilidades,.conteudo-projeto,#rodape',slide,{delay: 500, origin:'bottom', interval:200});
sr.reveal('.sessao-a-texto',slideHome,{delay:200, origin:'left'});
sr.reveal('.aside,.btn-contatos',slideHome,{delay:400, origin:'left',interval:200});

/* função para fechar o menu ao clicar em um dos botões*/
function closeNav(){
    document.getElementById('menu-toggle').checked=false;
}