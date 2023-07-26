const botao = document.querySelector('#botao1');

// Função para exibir uma mensagem de alerta
const exibirAlerta = (mensagem) => {
  window.alert(mensagem);
};

// Função para validar os dados do formulário
const validaDados = () => {
  botao.addEventListener('click', () => {
    const email = document.querySelector('#input-email1').value;
    const senha = document.querySelector('#input-senha').value;

    if (email === 'tryber@teste.com' && senha === '123456') {
      exibirAlerta('Olá, Tryber!');
    } else {
      exibirAlerta('Email ou senha inválidos.');
    }
  });
};

validaDados();

// --------- Requisito 18 ---------

const checkBox = document.querySelector('#agreement');
const btnSub = document.querySelector('#submit-btn');

// Função para substituir os campos do formulário pelos valores fornecidos pela pessoa usuária
// eslint-disable-next-line max-lines-per-function
const enviarFormulario = (event) => {
  event.preventDefault();
  const nome = document.querySelector('#input-name').value;
  const sobrenome = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const casa = document.querySelector('#house').value;
  const familia = document.querySelector('input[name="family"]:checked').value;
  const materiasSelecionadas = document.querySelectorAll('.subject:checked');
  const materias = Array.from(materiasSelecionadas).map((materia) => materia.value).join(', ');
  const avaliacao = document.querySelector('input[name="rate"]:checked').value;
  const observacoes = document.querySelector('#areaDoTexto').value;
  const formResultado = document.createElement('div');
  formResultado.className = 'formResultado';
  formResultado.innerHTML = `
    Nome: ${nome} ${sobrenome};<br>
    Email: ${email};<br>
    Casa: ${casa};<br>
    Família: ${familia};<br>
    Matérias: ${materias};<br>
    Avaliação: ${avaliacao};<br>
    Observações: ${observacoes}.
  `;
  const form = document.querySelector('#evaluation-form');
  form.replaceWith(formResultado);
};

// Função para habilitar ou desabilitar o botão de envio com base na concordância com as informações
const atualizarBotaoEnvio = () => {
  btnSub.disabled = !checkBox.checked;
};

btnSub.addEventListener('click', enviarFormulario);
checkBox.addEventListener('change', atualizarBotaoEnvio);
