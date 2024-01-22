const nomeCorSelecionada = document.getElementById('nome-cor-selecionada');
const tituloProduto = document.getElementById('titulo-produto');
const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const opcaoImagem0 = document.querySelector('#imagem-0 + label > img');
const opcaoImagem1 = document.querySelector('#imagem-1 + label > img');
const opcaoImagem2 = document.querySelector('#imagem-2 + label > img');

const verdeCipreste = {
  nome: 'Verde-Cipreste',
  nomePastaImagens: 'imagens-verde-cipreste',
  emEstoque: true,
};
const azulInverno = {
  nome: 'Azul-Inverno',
  nomePastaImagens: 'imagens-azul-inverno',
  emEstoque: true,
};
const meiaNoite = {
  nome: 'Meia-Noite',
  nomePastaImagens: 'imagens-meia-noite',
  emEstoque: false,
};
const estelar = {
  nome: 'Estelar',
  nomePastaImagens: 'imagens-estelar',
  emEstoque: true,
};
const rosaClaro = {
  nome: 'Rosa-Claro',
  nomePastaImagens: 'imagens-rosa-claro',
  emEstoque: true,
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];

const opcoesTamanho = ['41 mm', '45 mm'];

let corSelecionada = 1;
let tamanhoSelecionado = 1;
let imagemSelecionada = 1;

function atualizarCorSelecionada() {
  const numeroCorSelecionada = document
    .querySelector('[name="opcao-cor"]:checked')
    .id.split('cor-')[1];
  corSelecionada = numeroCorSelecionada;
  nomeCorSelecionada.innerText = `Cor - ${opcoesCores[corSelecionada].nome}`;
  imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-${imagemSelecionada}.jpeg`;
  opcaoImagem0.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-0.jpeg`;
  opcaoImagem1.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-1.jpeg`;
  opcaoImagem2.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-2.jpeg`;
  tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[
    corSelecionada
  ].nome.toLowerCase()} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;
}

function atualizarTamanho() {
  const opcaoTamanhoSelecionado = document
    .querySelector('[name="opcao-tamanho"]:checked')
    .id.split('tamanho-')[1];
  tamanhoSelecionado = opcaoTamanhoSelecionado;
  if (opcoesTamanho[tamanhoSelecionado] === '41 mm') {
    imagemVisualizacao.classList.add('caixa-pequena');
    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[
      corSelecionada
    ].nome.toLowerCase()} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;
    return;
  }
  imagemVisualizacao.classList.remove('caixa-pequena');
  tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[
    corSelecionada
  ].nome.toLowerCase()} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;
}

function atualizarImagemSelecionada() {
  const opcaoImagemSelecionada = document
    .querySelector('[name="opcao-imagem"]:checked')
    .id.split('imagem-')[1];
  imagemSelecionada = opcaoImagemSelecionada;
  imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-${imagemSelecionada}.jpeg`;
}
