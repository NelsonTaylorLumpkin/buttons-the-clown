import { reservationRequest } from "./parties.js";
import { Reservations } from "./reservations.js";

export const buttons = () => {
    return `
    <h1>Here Comes Buttons!</h1>

        <section class="reservations">
            ${Reservations()}
        </section>

        <section class="reservationRequests">
            <h2>Service Requests</h2>
            ${reservationRequest()}
        </section>
        
   
</select>
    `
}