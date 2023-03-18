const parametrosURL = new URLSearchParams(window.location.search);
const parametrosID = parametrosURL.get("id");


const mostrarEventos = async() => { 
    const listaDeEventos =  document.querySelector("#eventos")
const Options = {
    method :'GET',
    redirect :'follow',
};
    const request = await fetch (`${BASE_URL}/events`, Options)
    const conteudoResposta = await request.json();

    
    const eventos = conteudoResposta.slice(0,6);
    eventos.forEach(item => { listaDeEventos.innerHTML +=  `
    <article id="cardLP" class="evento card p-5 m-3">
    <h2>${item.name}${item.scheduled}</h2>
    <h4>${item.attractions}</h4>
    <p>${item.description}.</p>
    <a href="${BASE_URL}/bookings/${item._id}" id="myBtn" class="btn btn-primary">reservar ingresso</a>
    </article>`
    });


var modal = document.getElementById("myModal");

// Botão do modal

var btn = document.querySelectorAll("#myBtn");

//fecha o modal 

var span = document.getElementsByClassName("close")[0];

// Quando clicar no botão do modal ele faz o evento

btn.forEach ( (botao) => 
botao.onclick = function (evento) {
    modal.style.display = "block";
    evento.preventDefault();
})

// Quando o usuario clicar

span.onclick = function () {
    modal.style.display = "none";
}

// sair do modal

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
};    

mostrarEventos()
