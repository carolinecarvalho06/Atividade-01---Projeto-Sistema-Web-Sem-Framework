fetch('../arquivo.json')
  .then(response => response.json())
  .then(data => {
    const lista = document.getElementById('lista-produtos');

    data.produtos.forEach(produto => {
      const item = document.createElement('div');

      item.innerHTML = `
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <strong>${produto.preco}</strong>
        <hr>
      `;

      lista.appendChild(item);
    });
  })
  .catch(error => console.log('Erro ao carregar JSON:', error));