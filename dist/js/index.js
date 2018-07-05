var index = {
    variaveis: {
        $backgroundEntrevistas: $('[data-background]'),
        $videoEntrevistas: $('[data-video]'),
        $indicators: $('.indicators'),
        $modalBtn: $('[data-target]'),
        $modalClose: $('.modal-close')
    },
    
    fullPage: function(){
        $('#fullpage').fullpage(); //Inicia o fullpage
    },
    
    asideMenu: function () {
        $('.sidenav').sidenav({
            edge: 'right',
            preventScrolling: false
        });
    },
    
    carousel: function(){
        $('.carousel').carousel({ //Inicia o carousel
            indicators: true, // com true as bolinhas ficam la, com false sai as bolinha
            fullWidth: true, // Faz ficar grandao o carousel
        });
        
        const $arrow = $('[data-click]'); // estou pegandoo a tag que tem esse atributo
        
        function mudaSlide (e) { // funcao para fazer a mudanca no carousel
            e.preventDefault(); // nao deixa acontecer o eventoo padrão
            e.stopPropagation(); // nao deixa acontecer o evento de click nos pais do elemtno
            
            let side = e.target.parentElement.dataset.click; //pega o valor que esta dentro do data-click pra saber se vai para o proximo slide ou anterioor
            
            if ( side == "right" ) { // se for o valor direito que esta no data click
                $('.carousel').carousel('next'); // faz ir para o proximoo slide
            } else { // senao
                $('.carousel').carousel('prev'); // vai para o proximo
            }
        }
        
        $arrow.click(mudaSlide); // quando ocorrer  evento de click nessa variavel chama a funcao mudaSlide
    },
    
    modal: function(){
        $('.modal').modal();

        const indicators = $('.indicators');

        index.variaveis.$modalBtn.click(function () {
            indicators.addClass('-red')
        })
        
        index.variaveis.$modalClose.click(function () {
            indicators.removeClass('-red')
        })
    },
    
    entrevista: function (videoNumber){
        const video = videoNumber.siblings();
        
        videoNumber.css('display', 'none');
        video.css('display', 'block');
    },
    
    ready: function(){
        index.fullPage();
        index.carousel();
        index.modal();
        index.asideMenu();
        
        index.variaveis.$backgroundEntrevistas.click(function (e){
            const videoNumber = $(e.target).parent();
            
            index.entrevista(videoNumber);
        });
    }
}

$(document).ready(index.ready);
