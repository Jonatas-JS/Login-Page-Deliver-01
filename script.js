// Outra forma, só que maior de remover a imagem avatar-in-box

  if (document.body.clientWidth < 895) {
    let removeImg = document.querySelector('.image-information');
    removeImg.remove();
  }

    // var imgAvatarVespa = document.getElementById('avatar-in-box');
      // imgAvatarVespa.parentNode.removeChild(imgAvatarVespa);

  //Adicionar um evento de "Keypress", pressionar botão
  document.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
      let btn = document.querySelector('#submit')
      btn.click() //pegua o ID(o botão que tem o onclick) e dá a caracteristica de click.
    }
  })
function entrar() {
  let email = document.getElementById('email').value.toLowerCase()
  let password = document.getElementById('password').value

  let emailCad = ['jonatas.silva@delivery.com', 'selton.silva@delivery.com', 'juliana.marques@delivery.com']
  let senhaCad = ['123456', '654321', '92513987']

  let senhaPosition = senhaCad.indexOf(password)
  
  if (emailCad.includes(email) && password == senhaCad[emailCad.indexOf(email)]) {
  //vai olhar dentro(INCLUDES()) da Array se tem o e-mail digitado.
  //Se a senha == vai no Array que tem as senhas, pega a posição(INDEXOF()) do e-mail digitado dentro do Array emailCad
  //por fim, vai comparar se o a senha digitada está vinculada a posição na Array do e-mail digitado.

    document.querySelector('.user-platform').classList.add('active') //peguei a class="modal-overlay" e adicionei a ela a class="active"
    let userCad = [//cadastro com as informações dos usuários em objetos.
      {
        img: 'https://avatars.githubusercontent.com/u/69220608?v=4',
        nome: 'Jônatas Fernandes',
        idade: '23 anos',
        endereco: 'Rua Lino Machado, 32, Vila Betânia'
      },
      {
        img: 'https://avatars.githubusercontent.com/u/44243944?v=4',
        nome: 'Selton Kaway',
        idade: '25 anos',
        endereco: 'Rua José Campos Torquato, 09, Vila Betânia'
      },
      {
        img: 'https://avatars.githubusercontent.com/u/94191095?v=4',
        nome: 'Juliana Marques',
        idade: '26 anos',
        endereco: 'Rua Terezinha Franco de Sousa, 68, Maravilha'
      }
    ]
    //Criando as informações de perfil com JS
    let imagePerfil = document.getElementById('imagePerfil') //vai pegar o HTML inteiro
    let img = document.createElement('img') //vai criar um elemento do tipo IMG
    img.setAttribute('src', `${userCad[emailCad.indexOf(email)].img}`) //vai dar atributo SRC ao elemento IMG criado.
    imagePerfil.appendChild(img) //criar um filho, esse filho vai ser tudo que foi criado anteriormente no IMG.
    
    document.getElementById('nameUser').innerHTML = `${userCad[emailCad.indexOf(email)].nome}`
    document.getElementById('ageUser').innerHTML = `${userCad[emailCad.indexOf(email)].idade}`
    document.getElementById('streetUser').innerHTML = `${userCad[emailCad.indexOf(email)].endereco}`

    //Criando as entregas do usuário
    let tbody = document.getElementById('entregas')
    let clientId = 0
    let pedidos = [ //pedidos
      {
        id: '1',
        name: 'Juliana Marques',
        address: 'Rua Lino Machado',
        cash: 'R$ 17,00',
        change: 'R$ 3,00',
        order: 'Cheese Burger',
        dateOrder: '29/04/2022',
        hourOrder: '18:30',
        comments: 'Buzinar para que eu desça.'
      },
      {
        id: '2',
        name: 'Isaac Fernandes',
        address: 'Av. Geraldo Bizarria',
        cash: 'R$ 17,50',
        change: 'R$ 2,50',
        order: 'Batata rustica, creme de cheddar e bacon',
        dateOrder: '29/04/2022',
        hourOrder: '18:32',
        comments: ''
      },
      {
        id: '3',
        name: 'Gabriel Monteiro',
        address: 'Rua Eduardo Campos',
        cash: 'R$ 22,00',
        change: 'R$ 0,00',
        order: 'Calabresa acebolada',
        dateOrder: '29/04/2022',
        hourOrder: '18:45',
        comments: ''
      },
      {
        id: '4',
        name: 'Israel Barros',
        address: 'Av. 25 de Março',
        cash: 'R$ 21,00',
        change: 'R$ 19,00',
        order: 'Espeto de boi',
        dateOrder: '29/04/2022',
        hourOrder: '18:46',
        comments: ''
      },
      {
        id: '5',
        name: 'Ana Vitória',
        address: 'Rua Miguel Firmino',
        cash: 'R$ 11,00',
        change: 'R$ 9,00',
        order: 'Porção de macaxeira',
        dateOrder: '29/04/2022',
        hourOrder: '18:50',
        comments: ''
      },
      {
        id: '6',
        name: 'Débora Talita',
        address: 'Rua Miguel Felipe',
        cash: 'R$ 22,00',
        change: 'Cartão',
        order: 'Queijo coalho assado',
        dateOrder: '29/04/2022',
        hourOrder: '19:01',
        comments: 'Avisar quando estiver vindo, meu filho está dormindo.'
      },
      {
        id: '7',
        name: 'Ronier Batista',
        address: 'Rua Terezinha Franco de Sousa',
        cash: 'R$ 33,00',
        change: 'R$ 7,00',
        order: 'Filé com fritas 1 Pessoa',
        dateOrder: '29/04/2022',
        hourOrder: '19:03',
        comments: ''
      }
    ]
    while (clientId < pedidos.length) {
      //enquanto o ID do cliente for menor que a quantidade de obsjetos no Array faça...      
        tbody.innerHTML += `
          <tr>
            <td>${pedidos[clientId].id}</td>
            <td>${pedidos[clientId].name}</td>
            <td>${pedidos[clientId].address}</td>
            <td>${pedidos[clientId].cash}</td>
            <td>${pedidos[clientId].change}</td>
            <td><a href="#" class="abrirDetalhes" data-id="${clientId}"><img src="/assets/circle-info-solid.svg" alt="abrir detalhes"></a></td>
          </tr>`
          clientId++
    }
    let detalhes = document.querySelectorAll('.abrirDetalhes')
    for (let i = 0; i < detalhes.length; i++) {
      detalhes[i].addEventListener("click", function (e) {
        const dataId = Number(document.querySelector('.abrirDetalhes').getAttribute('data-id'))
        let item = pedidos[i]
        document.querySelector('.modal-overlay').classList.add('active')
        document.getElementById('nComanda').innerHTML = `Comanda #${item.id}`
        //aqui vai outra estrutura de como mantar uma table com th vertical
        //no HTML só vai precisar do <table> e <tboty> dentro cada <tr> vai um <th> e <td>
        document.getElementById('infoComanda').innerHTML = `
        <tr>
        <th scope="row">Id</th>
        <td>${item.id}</td>
        </tr>
        <tr>
        <th scope="row">Nome</th>
        <td>${item.name}</td>
        </tr>
        <tr>
        <th scope="row">Endereço</th>
        <td>${item.address}</td>
        </tr>
        <tr>
        <th scope="row">Valor</th>
        <td>${item.cash}</td>
        </tr>
        <tr>
        <th scope="row">Troco</th>
        <td>${item.change}</td>
        </tr>
        <tr>
        <th scope="row">Pedido</th>
        <td>${item.order}</td>
        </tr>
        <tr>
        <th scope="row">Data</th>
        <td>${item.dateOrder}</td>
        </tr>
        <tr>
        <th scope="row">Hora</th>
        <td>${item.hourOrder}hr</td>
        </tr>
        <tr>
        <th scope="row">Obs.:</th>
        <td>${item.comments}</td>
        </tr>`
    
        document.querySelector('#fechar-modal').addEventListener('click', fechar)
        function fechar() {
          document.querySelector('.modal-overlay.active').classList.remove('active')
        }
      })
    }

    function abrirDetalhes() {

    }

  } else if (emailCad.includes(email) == false) {
    //como o INCLUDES só retorna TRUE ou FALSE, se a resposta for == FALSE então...
    document.getElementById('emailLogin').innerHTML = 'Email: <font color ="#A93159"><strong>e-mail inexistente.</strong></font>'
    document.getElementById('passwordLogin').innerHTML = 'Senha:'
    document.getElementById('password').value = ''
  } else {
    document.getElementById('passwordLogin').innerHTML = 'Senha: <font color="#A93159"><strong>senha incorreta.</strong></font>'
    document.getElementById('password').value = ''
  }
}
function sair() {
  let reloadPage = document.querySelector('.user-platform.active')
  reloadPage.addEventListener('click', function() {
  // quando apertar o X vai acionar a ação CLICK(que ele está "escutando" e abrir uma função sem nome).
    location.reload(); //localmente faça um RELOAD da página.
})
  //devido o RELOAD acima, essa função que remove a class .ACTIVE já náo é mais necessária, mas tbm seria uma opção viável.
  //mas seria necessário o "esvaziamento" de algumas variáveis como imagePerfil e img,
  // e elas teriam que estar do lado de fora da function entrar() para serem acessadas aqui.
  // document.querySelector('.user-platform.active').classList.remove('active')
}
