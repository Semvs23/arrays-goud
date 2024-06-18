// OV-Chipkaart systeem

// Initialiseer passagiers array
let passengers = [
  {
    id: 163821,
    naam: "Leo Daams",
    saldo: 34,
    woonplaats: "Den Bosch",
    telefoonnummer: "0612345678",
  },
  {
    id: 163822,
    naam: "Anna de Vries",
    saldo: 50,
    woonplaats: "Amsterdam",
    telefoonnummer: "0612345679",
  },
  {
    id: 163823,
    naam: "Bram Jansen",
    saldo: 20,
    woonplaats: "Rotterdam",
    telefoonnummer: "0612345680",
  },
];

// Functie om de passagierslijst te tonen
function displayPassengers() {
  const passengerList = document.getElementById("passenger-list");
  passengerList.innerHTML = "";
  passengers.forEach((passenger) => {
    const passengerDiv = document.createElement("div");
    passengerDiv.className = "passenger";
    passengerDiv.innerHTML = `
        ID: ${passenger.id}<br>
        Naam: ${passenger.naam}<br>
        Saldo: €${passenger.saldo}<br>
        Woonplaats: ${passenger.woonplaats}<br>
        Telefoonnummer: ${passenger.telefoonnummer}
      `;
    passengerList.appendChild(passengerDiv);
  });
}

// Functie om een nieuwe passagier toe te voegen
function addPassenger(id, naam, saldo, woonplaats, telefoonnummer) {
  passengers.push({ id, naam, saldo, woonplaats, telefoonnummer });
  displayPassengers();
}

// Functie om een passagier in te checken
function checkInPassenger(id, amount) {
  const passenger = passengers.find((p) => p.id === id);
  if (passenger) {
    passenger.saldo -= amount;
    displayPassengers();
  }
}

// Functie om een passagier uit te checken
function checkOutPassenger(id, amount) {
  const passenger = passengers.find((p) => p.id === id);
  if (passenger) {
    passenger.saldo += amount;
    displayPassengers();
  }
}

// Functie om een passagier te verwijderen
function removePassenger(id) {
  passengers = passengers.filter((p) => p.id !== id);
  displayPassengers();
}

// Event listener voor de knop 'Toon Passagiers'
document
  .getElementById("show-passengers-button")
  .addEventListener("click", () => {
    displayPassengers();
  });

// Event listener voor de knop 'Voeg Passagier Toe'
document
  .getElementById("add-passenger-button")
  .addEventListener("click", () => {
    const id = parseInt(prompt("Voer het ID in:"));
    const naam = prompt("Voer de naam in:");
    const saldo = parseFloat(prompt("Voer het saldo in:"));
    const woonplaats = prompt("Voer de woonplaats in:");
    const telefoonnummer = prompt("Voer het telefoonnummer in:");
    addPassenger(id, naam, saldo, woonplaats, telefoonnummer);
  });

// Event listener voor de knop 'Check-in Passagier'
document
  .getElementById("checkin-passenger-button")
  .addEventListener("click", () => {
    const id = parseInt(prompt("Voer het ID in:"));
    const amount = parseFloat(
      prompt("Voer het bedrag in dat afgeschreven moet worden:")
    );
    checkInPassenger(id, amount);
  });

// Event listener voor de knop 'Check-out Passagier'
document
  .getElementById("checkout-passenger-button")
  .addEventListener("click", () => {
    const id = parseInt(prompt("Voer het ID in:"));
    const amount = parseFloat(
      prompt("Voer het bedrag in dat toegevoegd moet worden:")
    );
    checkOutPassenger(id, amount);
  });

// Event listener voor de knop 'Verwijder Passagier'
document
  .getElementById("remove-passenger-button")
  .addEventListener("click", () => {
    const id = parseInt(prompt("Voer het ID in:"));
    removePassenger(id);
  });
