const botao = document.querySelector('#botao1');

const exibirAlerta = (mensagem) => {
  window.alert(mensagem);
};

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

const checkBox = document.querySelector('#agreement');
const btnSub = document.querySelector('#submit-btn');

const dividirObservacoes = (texto, comprimentoMaximo) => {
  const palavras = texto.split(' ');
  const linhas = [];
  let linhaAtual = '';

  // eslint-disable-next-line no-restricted-syntax
  for (const palavra of palavras) {
    if (linhaAtual.length + palavra.length + 1 <= comprimentoMaximo) {
      linhaAtual += `${palavra} `;
    } else {
      linhas.push(linhaAtual.trim());
      linhaAtual = `${palavra} `;
    }
  }
  if (linhaAtual) {
    linhas.push(linhaAtual.trim());
  }

  return linhas.join('\n');
};

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
  const observacoesFormatadas = dividirObservacoes(observacoes, 30);

  const formResultado = document.createElement('div');
  formResultado.className = 'formResultado';
  formResultado.innerHTML = `
        Nome: ${nome} ${sobrenome};<br>
        Email: ${email};<br>
        Casa: ${casa};<br>
        Família: ${familia};<br>
        Matérias: ${materias};<br>
        Avaliação: ${avaliacao};<br>
        Observações: ${observacoesFormatadas}.
      `;

  const form = document.querySelector('#evaluation-form');
  form.replaceWith(formResultado);
};

const atualizarBotaoEnvio = () => {
  btnSub.disabled = !checkBox.checked;
};

btnSub.addEventListener('click', enviarFormulario);
checkBox.addEventListener('change', atualizarBotaoEnvio);
