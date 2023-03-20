import { fetchClowns, fetchReservations, fetchParties } from "./dataAccess.js"
import { buttons } from "./clowns.js"

export const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservations()
    .then(() => fetchClowns())
    .then(() => fetchParties())
      .then (() => {
            mainContainer.innerHTML = buttons()
        }
    )
    
}

render()

mainContainer.addEventListener(
    "stateChanged",
    (CustomEvent) => {
        render()
    }
)

