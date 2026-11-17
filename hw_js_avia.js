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
function findFlightByNumber(flightNumber) {
    for (let flight of flights) {
        if (flight.flightNumber === flightNumber) {
            console.log(`Рейс найден ${flight.flightNumber}`)
            console.log(`Летит в ${flight.destination}`)
            console.log(`Время вылета в ${flight.departureTime}.`)
            return
        }
    }
    console.log("Рейс не найден")
}
findFlightByNumber("TK-456"); 
findFlightByNumber("XX-000"); 

function registerPassenger(flightNumber, passengerName) {
    for (let flight of flights) {
        if (flight.flightNumber === flightNumber) {
            if (flight.passengers.length < flight.capacity) {
                flight.passengers.push(passengerName)
                console.log(`Пассажир ${passengerName} добавлен на рейс ${flightNumber}`)
                return
                }
                else {
                    console.log("На рейс нет свободных мест")
                return
            }
        }
    }
    console.log("Рейс не найден")
};
registerPassenger("SU-123", "Иван");
registerPassenger("SU-123", "Мария");
registerPassenger("SU-123", "Петр");
registerPassenger("XX-000", "Вася");

function showFlightPassengers(flightNumber) {
    for (let flight of flights) {
        if (flight.flightNumber === flightNumber) {
            console.log(`Пассажиры рейса ${flightNumber}:`)
            for (let passenger of flight.passengers) {
                console.log(passenger)
            }
                return
            }
        }
    console.log("Рейс не найден")
};
showFlightPassengers("SU-123");
showFlightPassengers("TK-456");

function cancelFlight(flightNumber) {
    flights = flights.filter(flight => flight.flightNumber !== flightNumber)
    console.log(`Рейс ${flightNumber} успешно отменен`)
};
cancelFlight("TK-456");
showAllFlights();