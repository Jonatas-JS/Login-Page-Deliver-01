// Outra forma, só que maior de remover a imagem avatar-in-box
  /*
  if (document.body.clientWidth < 1220) {
    var removeImg = document.getElementById('avatar-in-box');
    removeImg.remove();

    // var imgAvatarVespa = document.getElementById('avatar-in-box');
      // imgAvatarVespa.parentNode.removeChild(imgAvatarVespa);
  } */

function entrar() {
  var email = document.getElementById('email').value
  var senha = document.getElementById('senha').value
  
  if (email != 'jonatas.silva@delivery.com' && senha != '123456') { //Validação do e-mail e senha
    alert('[ERRO] verifique as informações e tente novamente')
  } else {
    document.querySelector('.modal-overlay').classList.add('active') //peguei a class="modal-overlay" e adicionei a ela a class="active"

    var tbody = document.getElementById('entregas')
    var clientId = 0

      while (clientId <= 6) { //enquanto o ID do cliente for menor que 6(forçadamente a quantidade de pedidos existentes) então...
        var clientName = ['Juliana Marques', 'Isaac Fernandes', 'Gabriel Oliveira', 'Israel Barros', 'Ana Vitória', 'Débora Talita', 'Ronier Batista']
        var clientAddress = ['Rua Lino Machado', 'Av. Geraldo Bizarria', 'Rua Miguel Felipe', 'Rua Eduardo Campos', 'Av. 25 de Março', 'Rua Miguel Firmino', 'Rua Terezinha Franco de Sousa']
        var clientCash = ['R$ 22,50', 'R$ 19,00', 'R$ 35,00', 'R$ 22,50', 'R$ 12,00', 'R$ 25,80', 'R$ 15,00']
        var clientChange = ['R$ 2,50', 'R$ 1,00', 'R$ 0,00', 'R$ 7,50', 'R$ 3,00', 'Cartão', 'R$ 5,00']
        
        tbody.innerHTML += `
          <tr>
            <td>${clientId}</td>
            <td>${clientName[clientId]}</td>
            <td>${clientAddress[clientId]}</td>
            <td>${clientCash[clientId]}</td>
            <td>${clientChange[clientId]}</td>
          </tr>`
          clientId++
    }
  }
}
function sair() {
  document.querySelector('.modal-overlay.active').classList.remove('active')
}
