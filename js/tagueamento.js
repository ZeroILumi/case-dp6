// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.


// Inicío Google Analytics 
/*
    O código a seguir realiza quatro ações principais:
        Cria um elemento <script> que inicia o download assíncrono da biblioteca 
    JavaScript analytics.js com base em https://www.google-analytics.com/analytics.js.
        Inicializa uma função global ga [chamada fila de comandos do ga()] que permite 
    programar a execução de comandos quando a biblioteca analytics.js estiver carregada 
    e pronta para uso.
        Adiciona um comando à fila de comandos do ga() com o objetivo de criar um 
    novo objeto do rastreador para a propriedade especificada pelo parâmetro 'GA_MEASUREMENT_ID'.
        Inclui outro comando na fila de comandos do ga() para enviar uma exibição da página atual 
    ao Google Analytics.
*/
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-12345-6', 'auto');
ga('send', 'pageview');

/*  
    O comando a seguir envia um hit de exibição de página ao Google Analytics 
    e inclui o caminho da página atual.
*/

ga('send', {
    hitType: 'pageview',
    page: location.pathname
  });

/*
  O comando incluido na função a seguir envia um evento ao Google Analytics 
  indicando que ocorreu interação como botão intitulado como "Entre em Contato"
  além disso gera um log no console informando qual evento ocorreu.
*/

function entrou_em_contato()
{
    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'entre_em_contato',
        eventLabel: 'link_externo'
      });
    console.log('Entrou em contato com a Dp6')
}
 
/*
  O comando incluido na função a seguir envia um evento ao Google Analytics 
  indicando que ocorreu interação com o botão intitulado como "Download PDF"
  além disso gera um log no console informando qual evento ocorreu.
*/

function efetuou_o_download_do_pdf()
{
    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'download_pdf',
        eventLabel: 'download_pdf'
      });
    console.log("Efetuou o download do PDF")
}

/*
  O comando incluido na função a seguir envia um evento ao Google Analytics 
  indicando que ocorreu interação com o botão intitulado como "Lorem"
  além disso gera um log no console informando qual evento ocorreu.
*/

function clicou_no_botao_lorem()
{
    ga('send', {
        hitType: 'event',
        eventCategory: 'analise',
        eventAction: 'ver_mais',
        eventLabel: 'Lorem'
      });    
    console.log('Clicou no botão Lorem')
}

/*
  O comando incluido na função a seguir envia um evento ao Google Analytics 
  indicando que ocorreu interação com o botão intitulado como "Ipsum"
  além disso gera um log no console informando qual evento ocorreu.
*/

function clicou_no_botao_ipsum()
{
    ga('send', {
        hitType: 'event',
        eventCategory: 'analise',
        eventAction: 'ver_mais',
        eventLabel: 'Ipsum'
      });
    console.log('Clicou no botão Ipsum')
}

/*
  O comando incluido na função a seguir envia um evento ao Google Analytics 
  indicando que ocorreu interação com o botão intitulado como "Dolor"
  além disso gera um log no console informando qual evento ocorreu.
*/

function clicou_no_botao_dolor()
{
    ga('send', {
        hitType: 'event',
        eventCategory: 'analise',
        eventAction: 'ver_mais',
        eventLabel: 'Dolor'
      });
    console.log('Clicou no botão Dolor')
}


/*
  O comando a seguir envia um evento ao Google Analytics indicando que ocorreu interação com
  o campo do formulario intitulado como "nome" do id "nome"
  além disso gera um log no console informando qual evento ocorreu.
*/

function preencheu_o_campo_nome()
{
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: 'nome',
        eventLabel: 'preencheu'
      });
    console.log('Preencheu o campo nome')
}


/*
  O comando a seguir envia um evento ao Google Analytics indicando que ocorreu interação com
  o campo do formulario intitulado como "email" do id "email"
  além disso gera um log no console informando qual evento ocorreu.
*/

function preencheu_o_campo_email()
{
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: 'email',
        eventLabel: 'preencheu'
      });
    console.log('Preencheu o campo email')
}

/*
  O comando a seguir envia um evento ao Google Analytics indicando que ocorreu interação com
  o campo do formulario intitulado como "telefone" do id "telefone"
  além disso gera um log no console informando qual evento ocorreu.
*/

function preencheu_o_campo_telefone()
{
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: 'telefone',
        eventLabel: 'preencheu'
      });
    console.log('Preencheu o campo telefone')
}

/*
  O comando a seguir envia um evento ao Google Analytics indicando que ocorreu interação com
  o campo do formulario intitulado como "aceito" do id "aceito"
  além disso gera um log no console informando qual evento ocorreu.
*/

function preencheu_o_campo_aceito()
{
    var checkbox_ativa = document.getElementById("aceito").checked
    if(checkbox_ativa == true)
    {
        ga('send', {
            hitType: 'event',
            eventCategory: 'contato',
            eventAction: 'aceito',
            eventLabel: 'preencheu'
          });
        console.log('Preencheu o campo aceito')
    }
    else if(checkbox_ativa == false)
    {
        ga('send', {
            hitType: 'event',
            eventCategory: 'contato',
            eventAction: 'aceito',
            eventLabel: 'Esvaziou'
          });
        console.log('Esvaziou o campo aceito')
    }
}

/*
  O comando a seguir envia um evento ao Google Analytics indicando que o formulario 
  foi enviado e foi lançado um popup
  além disso gera um log no console informando qual evento ocorreu.
*/

function enviou_o_formulario()
{
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: 'enviado',
        eventLabel: 'enviado'
      });
    console.log('Enviou o formulario')
}

// Fim Google Analytics 