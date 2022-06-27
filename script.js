function confirmaLogin() {
    const inputEmail = document.getElementById('input-emailheader');
    const inputSenha = document.getElementById('input-senha');
  
    if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  }
  
  const buttonInput = document.getElementById('button-login');
  buttonInput.addEventListener('click', confirmaLogin);
  
  const check = document.getElementById('agreement');
  const buttonEnviar = document.getElementById('submit-btn');
  
  function agreement() {
    if (check.checked === true) {
      buttonEnviar.disabled = false;
    } else {
      buttonEnviar.disabled = true;
    }
  }
  
  check.addEventListener('click', agreement);
  
  const textarea = document.getElementById('textarea');
  
  function countDown() {
    const container = document.getElementById('counter');
    const number = textarea.value.length;
    const newNumber = 500 - number;
  
    container.innerText = newNumber;
  }
  
  textarea.addEventListener('keyup', countDown);
  
  // requisito 21
  
  const container = document.getElementById('evaluation-form');
  
  function deleteAll() {
    const apagar = document.querySelectorAll('.division');
    for (let id = 0; id < apagar.length; id += 1) {
      apagar[id].remove();
    }
  }
  
  const nomecompleto = () => {
    const criar = document.createElement('p');
    const nome = document.getElementById('input-name').value;
    const sobrenome = document.getElementById('input-lastname').value;
    criar.innerText = `Nome: ${nome} ${sobrenome}`;
    container.appendChild(criar);
  };
  
  const email = () => {
    const criar = document.createElement('p');
    const mail = document.getElementById('input-email').value;
    criar.innerText = `Email: ${mail}`;
    container.appendChild(criar);
  };
  
  const casaEscolhida = () => {
    const criar = document.createElement('p');
    const casas = document.getElementsByClassName('houses-options');
    let escolhida = '';
  
    for (let id = 0; id < casas.length; id += 1) {
      if (casas[id].selected === true) {
        escolhida = casas[id].innerHTML;
      }
    }
  
    criar.innerText = `Casa: ${escolhida}`;
    container.appendChild(criar);
  };
  
  const familias = () => {
    const criar = document.createElement('p');
    const familys = document.getElementsByClassName('familys');
    let escolhida = '';
  
    for (let id = 0; id < familys.length; id += 1) {
      if (familys[id].checked === true) {
        escolhida = familys[id].value;
      }
    }
  
    criar.innerText = `Família: ${escolhida}`;
    container.appendChild(criar);
  };
  
  const materias = () => {
    const criar = document.createElement('p');
    const subjects = document.getElementsByClassName('subject');
    const escolhida = [];
  
    for (let id = 0; id < subjects.length; id += 1) {
      if (subjects[id].checked === true) {
        escolhida.push(` ${subjects[id].value}`);
      }
    }
  
    criar.innerText = `Matérias: ${escolhida}`;
    container.appendChild(criar);
  };
  
  const avaliacao = () => {
    const criar = document.createElement('p');
    const number = document.getElementsByClassName('n-rate');
    let escolhida = '';
  
    for (let id = 0; id < number.length; id += 1) {
      if (number[id].checked === true) {
        escolhida = number[id].value;
      }
    }
  
    criar.innerText = `Avaliação: ${escolhida}`;
    container.appendChild(criar);
  };
  
  const observacoes = () => {
    const criar = document.createElement('p');
    const txt = document.getElementById('textarea').value;
  
    criar.innerText = `Observações: ${txt}`;
    container.appendChild(criar);
  };
  
  function changeContent() {
    nomecompleto();
    email();
    casaEscolhida();
    familias();
    materias();
    avaliacao();
    observacoes();
    deleteAll();
  }
  
  buttonEnviar.addEventListener('click', changeContent);