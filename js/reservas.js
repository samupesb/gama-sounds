//Listar Eventos
import { eventList } from "./crud.js";
import { arrayToString, isoStringToLocaleDateString } from "./parse.js"

function eventList(){
    let endpoint = "https://soundgarden-api.vercel.app//events"
    fetch(endpoint)
    .then((response) => {
        return response.json();
    });
    then(data => {
        console.log(data)
    })
}
document.addEventListener("DOMContentLoaded", async () => {
    const events = await eventList();
    console.log(events);
    let html = "";

    events.forEach((event) => {
        let htmlSegment = `
        <article id=${event._id} class="evento card p-5 m-3">
        <h2>${event.name} - ${isoStringToLocaleDateString(event.scheduled)}</h2>
        <h4>${arrayToString(event.attractions)}</h4>
        <p>$(event.description)</p>
        <a href="#" class="btn btn-primary">reservar ingresso</a>
        </article>
        `;
        html += htmlSegment;
    });
    const eventsContainer = document.querySelector("#events-container");
    eventsContainer.innerHTML = html;
})