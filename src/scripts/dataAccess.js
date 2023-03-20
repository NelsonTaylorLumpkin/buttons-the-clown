import { mainContainer } from "./main.js"

const applicationState = {
    reservations: [],
    clowns: [],
    parties: []
}

const API =  "http://localhost:8088"

export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
    .then(response => response.json())
    .then(
        (serviceReservations) => {
            applicationState.reservations = serviceReservations
        }
    )
}
//  fetchReservations()
export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
    .then(response => response.json())
    .then(
        (data) => {
            applicationState.clowns = data
        }
    )
}
// fetchClowns()
export const fetchParties = () => {
    return fetch(`${API}/parties`)
    .then(response => response.json())
    .then(
        (partyReservations) => {
            applicationState.parties = partyReservations
        }
    )
}
// fetchParties()
export const getReservations = () => {
    return [...applicationState.reservations]
}
export const getClowns = () => {
    return [...applicationState.clowns]
}

export const getParties = () => {
    return [...applicationState.parties]
}

export const sendReservation = (userClownRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userClownRequest)
    }
    return fetch(`${API}/reservations`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    }
    )
}
export const sendParties = (userClownRequest) => {
     fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userClownRequest)
    }
    return fetch(`${API}/parties`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    }
    )
}
export const deleteReservation = (id) => {
    return fetch(`${API}/reservations/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}