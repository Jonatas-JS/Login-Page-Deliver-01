// if( $(window).width() < 1220) {
//   var node = document.getElementById('avatar-in-box');
//   if (node.parentNode) {
//     node.parentNode.removeChild(node);
//   }
// };

document.body.onresize = function() {
  if (document.body.clientWidth < 1220) {
    var node = document.getElementById('avatar-in-box');
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  }
}

function entrar() {
  var email = document.getElementById('email').value
  var senha = document.getElementById('senha').value
  
  if (email != 'jonatas.silva@delivery.com' && senha != '123456') {
    alert('[ERRO] verifique as informações e tente novamente')
  } else {
    document.querySelector('.modal-overlay').classList.add('active')

    function entregas() {
      var clientId = ''
      var clientName = ['Juliana Marques', 'Isaac Fernandes', 'Gabriel Oliveira', 'Israel Barros', 'Ana Vitória', 'Débora Talita']
      var clientAddress = ['Rua Lino Machado', '', '', '', '', '', '']
      var clientCash = ['', '', '', '', '', '', '']
      var clientChange = ['', '', '', '', '', '', '']
      
      //Adicionar as TR no TBODY
      if (clientId <= clientName.length) {
        document.querySelector('entregas')
      }

    }
}
}
function sair() {
  document.querySelector('.modal-overlay.active').classList.remove('active')
}
