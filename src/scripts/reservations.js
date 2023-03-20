import { getClowns, getReservations, getParties, sendParties } from "./dataAccess.js";
import { deleteReservation} from "./dataAccess.js"
import { sendReservation } from "./dataAccess.js";

export const Reservations = () => {
    const reservations = getReservations()

    let html = `
    <ul>
    ${reservations.map(convertReservationToListElement)}
    </ul>
    `
    return html
}



export const convertReservationToListElement = (reservation) => {
    const clowns = getClowns()
    const parties = getParties()
    return `
    <li>${reservation.parentName}
    <select class="clowns" id="clowns">
    <option value="0">Pick Your Clown!!!!!</option>
    ${
        clowns.map(
        clown => {
            return `<option value="${reservation.id}--${clown.id}">${clown.name}</option>`
        }
    ).join("")
            }
</select> 
<button class="reservation__delete"
id="reservation--${reservation.id}">
Delete
</button>${
        parties.map(
            party => {
                if (parties.reservationId === reservation.id)
                return `<option value="${party.id}--${reservation.id}">${reservation.parentName}`
                
            }
        )
    }
    ${reservation.parentName}
   
        </li>
</ul>`
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [, reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns--") {
            const [reservationId, clownId] = event.target.value.split("--")

           
            const parties = {
                reservationId : parseInt(reservationId),
                clownId : parseInt(clownId),
                date : Date.now()
             }
            sendParties(parties)
            
        }
    }
)