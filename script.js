// Outra forma, só que maior de remover a imagem avatar-in-box
  /*
  if (document.body.clientWidth < 1220) {
    var removeImg = document.getElementById('avatar-in-box');
    removeImg.remove();

    // var imgAvatarVespa = document.getElementById('avatar-in-box');
      // imgAvatarVespa.parentNode.removeChild(imgAvatarVespa);
  } */

function entrar() {
  var email = document.getElementById('email').value.toLowerCase()
  var password = document.getElementById('senha').value

  var emailCad = ['jonatas.silva@delivery.com', 'selton.silva@delivery.com'] 
  var senhaCad = ['123456', '654321']

  var senhaPosition = senhaCad.indexOf(password)
  
  if (emailCad.includes(email) && password == senhaCad[emailCad.indexOf(email)]) {
  //vai olhar dentro(INCLUDES()) da Array se tem o e-mail digitado.
  //Se a senha == vai no Array que tem as senhas, pega a posição(INDEXOF()) do e-mail digitado dentro do Array emailCad
  //por fim, vai comparar se o a senha digitada está vinculada a posição na Array do e-mail digitado.

    document.querySelector('.modal-overlay').classList.add('active') //peguei a class="modal-overlay" e adicionei a ela a class="active"
    // teste mudar nome
    // var nameUser = document.getElementById('nameUser').innerHTML = `${email}`
    // var ageUser = document.getElementById('ageUser').innerHTML = `${password}`
    var userCad = [
      {
        img: 'https://avatars.githubusercontent.com/u/69220608?v=4',
        nome: 'Jônatas Fernandes',
        idade: '24 anos',
        endereco: 'Rua Lino Machado, 32, Vila Betânia'
      },
      {
        img: 'https://avatars.githubusercontent.com/u/44243944?v=4',
        nome: 'Selton Kaway',
        idade: '26 anos',
        endereco: 'Rua José Campos Torquato, 09, Vila Betânia'
      }
    ]
    document.getElementById('imagePerfil').innerHTML = `<img src="${userCad[emailCad.indexOf(email).img]}"`
    document.getElementById('nameUser').innerHTML = `${userCad[emailCad.indexOf(email)].nome}`
    document.getElementById('ageUser').innerHTML = `${userCad[emailCad.indexOf(email)].idade}`
    document.getElementById('streetUser').innerHTML = `${userCad[emailCad.indexOf(email)].endereco}`

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
  } else if (emailCad.includes(email) == false) {
    //como o INCLUDES só retorna true ou false, se a resposta for == FALSE então...
    alert('[ERRO] e-mail inexistente, tente novamente.')
  } else {
    alert('[ERRO] senha incorreta, tente novamente.')
  }
}
function sair() {
  var reloadPage = document.querySelector('.modal-overlay.active')
  reloadPage.addEventListener('click', function() { //quando apertar o X vai acionar a ação CLICK(que ele está "escutando" e abrir uma função sem nome).
    location.reload(); //localmente fassa um RELOAD da página.
});
  document.querySelector('.modal-overlay.active').classList.remove('active')
}
