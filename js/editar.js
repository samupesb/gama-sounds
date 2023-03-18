
const formEvento = document.querySelector('#form-evento');


const idEvento = new URLSearchParams(window.location.search).get('id');


fetch(`https://soundgarden-api.vercel.app/events/${idEvento}`)
  .then(response => response.json())
  .then(data => {
    // preenche os campos do formulário com os dados do evento
    document.querySelector('#nome').value = data.nome;
    document.querySelector('#banner').value = data.banner;
    document.querySelector('#atracoes').value = data.atracoes.join(', ');
    document.querySelector('#descricao').value = data.descricao;
    document.querySelector('#data').value = data.data.substr(0, 16); 
    document.querySelector('#lotacao').value = data.lotacao;
  })
  .catch(error => {
    console.error(error);
  });


formEvento.addEventListener('submit', (event) => {
  event.preventDefault();

  
  const nome = document.querySelector('#nome').value;
  const banner = document.querySelector('#banner').value;
  const atracoes = document.querySelector('#atracoes').value.split(',').map(s => s.trim());
  const descricao = document.querySelector('#descricao').value;
  const data = document.querySelector('#data').value + ':00.000Z'; 
  const lotacao = document.querySelector('#lotacao').value;


  fetch(`https://soundgarden-api.vercel.app/events/${idEvento}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome,
      banner,
      atracoes,
      descricao,
      data,
      lotacao
    })
  })
  .then(response => {
    if (response.ok) {
      window.location.href = './admin.html';
    } else {
      throw new Error('Erro ao editar evento');
    }
  })
  .catch(error => {
    console.error(error);
  });
});