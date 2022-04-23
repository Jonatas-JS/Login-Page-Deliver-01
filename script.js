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
}
}
function sair() {
  document.querySelector('.modal-overlay.active').classList.remove('active')
}
