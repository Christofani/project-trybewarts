const botao = document.querySelector('#botao1');

const validaDados = () => {
  botao.addEventListener('click', () => {
    const email = document.querySelector('#input-email');
    const valorEmail = email.value;
    const senha = document.querySelector('#input-senha');
    const valorSenha = senha.value;
    if (valorEmail === 'tryber@teste.com' && valorSenha === '123456') {
      window.alert('Olá, Tryber!');
    } else {
      window.alert('Email ou senha inválidos.');
    }
  });
};
validaDados();
