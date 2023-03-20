import { sendReservation } from "./dataAccess.js"
export const reservationRequest = () => {
    let html = `
        <div class="field">
            <label class="label" for="reservationParentName">Name of Parent</label>
            <input type="text" name="reservationParentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationChildName">Name of Child</label>
            <input type="text" name="reservationChildName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationGuestNumber">Number of Guests</label>
            <input type="number" name="reservationGuestNumber" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationAddress">Address</label>
            <input type="text" name="reservationAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationDate">Date</label>
            <input type="date" name="reservationDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationLength">Party Length</label>
            <input type="number" name="reservationLength" class="input" />
        </div>

        <button class="button" id="submitReservation">Submit Reservation</button>
       
    `

    return html
}
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitReservation") {
      
        const userParentName = document.querySelector("input[name='reservationParentName']").value
        const userChildName = document.querySelector("input[name='reservationChildName']").value
        const userGuestNumber = document.querySelector("input[name='reservationGuestNumber']").value
        const userAddress = document.querySelector("input[name='reservationAddress']").value
        const userReservationDate = document.querySelector("input[name='reservationDate']").value
        const userReservationLength = document.querySelector("input[name='reservationLength']").value
     
        const dataToSendToAPI = {
            parentName : userParentName,
            childName : userChildName,
            guestNumber : userGuestNumber,
            address: userAddress,
            date: userReservationDate,
            length: userReservationLength
        }

        sendReservation(dataToSendToAPI)
    }
})