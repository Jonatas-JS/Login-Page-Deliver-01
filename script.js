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
  console.log(senha)
  var eMails = [
    'jonatas.silva@delivery.com', 
    'selton.silva@delivery.com', 
    'jefferson.mike@delivery.com', 
    'eudalio.silva@delivery.com'
  ]
  
  if (eMails.includes(email) != true) { //Validação do e-mail
    alert('[ERRO] e-mail inexistente')
  } else if(senha != '123456') {
    alert('[ERRO] senha inválida')
  } else {
    document.querySelector('.modal-overlay').classList.add('active') //peguei a class="modal-overlay" e adicionei a ela a class="active"

    var tbody = document.getElementById('entregas')
    var clientId = 0
    var clients = [
      {
        name: 'Juliana Marques',
        address: 'Rua Lino Machado',
        cash: 'R$ 22,50',
        change: 'R$ 2,50'
      },
      {
        name: 'Isaac Fernandes',
        address: 'Av. Geraldo Bizarria',
        cash: 'R$ 19,00',
        change: 'R$ 1,00'
      },
      {
        name: 'Gabriel Oliveira',
        address: 'Rua Eduardo Campos',
        cash: 'R$ 35,00',
        change: 'R$ 0,00'
      },
      {
        name: 'Israel Barros',
        address: 'Av. 25 de Março',
        cash: 'R$ 22,50',
        change: 'R$ 7,50'
      },
      {
        name: 'Ana Vitória',
        address: 'Rua Miguel Firmino',
        cash: 'R$ 12,00',
        change: 'R$ 3,00'
      },
      {
        name: 'Débora Talita',
        address: 'Rua Miguel Felipe',
        cash: 'R$ 25,80',
        change: 'Cartão'
      },
      {
        name: 'Ronier Batista',
        address: 'Rua Terezinha Franco de Sousa',
        cash: 'R$ 15,00',
        change: 'R$ 5,00'
      }
    ]
      while (clientId <= clients.length) { //enquanto o ID do cliente for menor que 6(forçadamente a quantidade de pedidos existentes) então...        
        tbody.innerHTML += `
          <tr>
            <td>${clientId+1}</td>
            <td>${clients[clientId].name}</td>
            <td>${clients[clientId].address}</td>
            <td>${clients[clientId].cash}</td>
            <td>${clients[clientId].change}</td>
          </tr>`
          clientId++
    }
  }
}
function sair() {
  document.querySelector('.modal-overlay.active').classList.remove('active')
}
