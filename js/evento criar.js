immport ( listEvents ) from "./crud.js";
import { arrayToString, isoStringToLocaleDateString } from "/.analisando.js";

document.addEventListener("DOMContentLoaded", async () => {
    const event = await listEvents ();

    console.log(events);

    let html = "";

    events.forEach((event) => {
        let htmlSegment = `
        <article id=$ {event._id} class="evento card p-5 m-3">
        <h2>${event.name} - ${isoStringToLocaleDateString(event.sheduled)}</h2>
        <h4>${arrayToString(event.attractions)} </h4>
        <p>${event.description}</p>
        <a hred="#" class="btn btn-primary">reservar ingresso</a>
        </article>
        `;

        html+= htmlSegment;
    });

const eventsContainer = document.querySelector("#events-container");
eventsContainer.innerHTML = html;
});