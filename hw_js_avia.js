/* Ф-ция addFlight(flightNumber, destination, departureTime, capacity) - добавляет новый рейс с указанными параметрами.
Ф-ция cancelFlight(flightNumber) - отменяет рейс с указанным номером.
Ф-ция registerPassenger(flightNumber, passengerName) - регистрирует пассажира на рейс с указанным номером.
Ф-ция findFlightByNumber(flightNumber) - ищет рейс по номеру и выводит его информацию.
Ф-ция showAllFlights() - выводит список всех рейсов.
Ф-ция showFlightPassengers(flightNumber) - выводит список пассажиров на рейсе с указанным номером.
*/

let flights = []

function addFlight(flightNumber, destination, departureTime, capacity) {
    let newFlight = {flightNumber: flightNumber, destination: destination,
        departureTime: departureTime, capacity: capacity, passengers: []}
    flights.push(newFlight)
}
addFlight("SU-123", "Москва", "12:00", 2);
addFlight("TK-456", "Стамбул", "15:30", 3);
function showAllFlights() {
    for (let flight of flights) {
        console.log(`Рейс ${flight.flightNumber} в ${flight.destination}, вылет в ${flight.departureTime}`)
    }
}
showAllFlights()
