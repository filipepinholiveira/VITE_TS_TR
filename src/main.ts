import './style.css'

const app = document.getElementById('app');
if (!app) throw new Error("Elemento #app não encontrado.");

const titleBox = document.createElement('div');
titleBox.className = 'bg-blue-500 text-white p-6 rounded shadow mb-6 mx-6 text-center';

// Título
const title = document.createElement('h1');
title.className = 'text-3xl font-bold mb-6 text-center mt-6';
title.textContent = 'A minha primeira página web TileWind';

titleBox.appendChild(title);

// Grid principal
const grid = document.createElement('div');
grid.className = 'grid grid-cols-3 gap-4 px-6 pb-6';

// Sidebar (coluna 1)
const sidebar = document.createElement('div');
sidebar.className = 'bg-white p-4 rounded shadow col-span-1 min-h-[200px]';

const sidebarTitle = document.createElement('h2');
sidebarTitle.textContent = 'Menu';
sidebarTitle.className = 'text-lg font-semibold mb-2';

const sidebarList = document.createElement('ul');
sidebarList.className = 'list-disc list-inside text-sm space-y-1';

['Início', 'Sobre', 'Contacto'].forEach(item => {
  const li = document.createElement('li');
  const button = document.createElement('button');
  button.textContent = item;
  button.className = 'text-blue-600 hover:underline';
  button.addEventListener('click', () => atualizarConteudo(item));
  li.appendChild(button);
  sidebarList.appendChild(li);
});



sidebar.appendChild(sidebarTitle);
sidebar.appendChild(sidebarList);



// Conteúdo principal (coluna 2-3)
const mainContent = document.createElement('div');
mainContent.className = 'bg-white p-4 rounded shadow col-span-2 min-h-[200px]';

const mainHeading = document.createElement('h2');
mainHeading.textContent = 'Benvindo!';
mainHeading.className = 'text-xl font-semibold mb-2';

const mainParagraph = document.createElement('p');
mainParagraph.textContent = 'Coisas lindas vão ser aqui escritas';
mainParagraph.className = 'text-sm text-gray-700';

mainContent.appendChild(mainHeading);
mainContent.appendChild(mainParagraph);

function atualizarConteudo(secao) {
  // Limpa o conteúdo atual
  mainContent.innerHTML = '';

  // Cria novos elementos conforme a seção selecionada
  const novoTitulo = document.createElement('h2');
  novoTitulo.className = 'text-xl font-semibold mb-2';

  const novoParagrafo = document.createElement('p');
  novoParagrafo.className = 'text-sm text-gray-700';

  // Define o conteúdo com base na seção
  switch (secao) {
    case 'Início':
      novoTitulo.textContent = 'Benvindo!';
      novoParagrafo.textContent = 'Coisas lindas vão ser aqui escritas';
      break;
    case 'Sobre':
      novoTitulo.textContent = 'Sobre Nós';
      novoParagrafo.textContent = 'Página criada para testar o Tilewind';
      break;
    case 'Contacto':
      novoTitulo.textContent = 'Contacto';
      novoParagrafo.textContent = 'Entre em contacto comigo para me ensinar como isto funciona!!!';
      break;
    default:
      novoTitulo.textContent = 'Seção não encontrada';
      novoParagrafo.textContent = 'A seção selecionada não existe.';
  }

  // Adiciona os novos elementos ao conteúdo principal
  mainContent.appendChild(novoTitulo);
  mainContent.appendChild(novoParagrafo);
}


// Montagem

app.appendChild(titleBox); // adiciona a caixa azul com o h1 dentro
app.appendChild(grid);     // depois o layout com sidebar e main content

grid.appendChild(sidebar);
grid.appendChild(mainContent);

