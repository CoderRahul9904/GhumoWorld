import React from "react";
import Header from "../components/Header";
import NewsletterContainer from "../components/NewsletterContainer";

// interface FlightDetail {
//   airline: string;
//   flightNumber: string;
//   aircraft: string;
//   departure: {
//     time: string;
//     airport: string;
//     terminal: string;
//   };
//   arrival: {
//     time: string;
//     airport: string;
//     terminal: string;
//   };
//   duration: string;
//   cabinBaggage: string;
//   checkInBaggage: string;
//   fare: {
//     base: number;
//     taxes: number;
//     total: number;
//   };
// }

const sampleFlight= {
  airline: "AirAsia X",
  flightNumber: "D7 182",
  aircraft: "Airbus A330",
  departure: {
    time: "19:10",
    airport: "Kuala Lumpur Intl, Terminal T2",
    terminal: "T2",
  },
  arrival: {
    time: "22:05",
    airport: "Indira Gandhi Int Airport, Terminal T3",
    terminal: "T3",
  },
  duration: "5h 25m",
  cabinBaggage: "7 Kgs / Adult",
  checkInBaggage: "40 Kgs / Adult",
  fare: {
    base: 31772,
    taxes: 9365,
    total: 41137,
  },
};

const TicketPage = () => {
  const f = sampleFlight;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 sm:p-6 lg:p-8 grid grid-cols-[2fr_1fr] md:grid-cols-1 gap-8">

        {/* Ticket-Style Flight Detail Card */}
        <section className="col-span-1 lg:col-span-2">
          <div className="relative bg-white border-2 border-dashed border-gray-400 rounded-2xl p-6">
            {/* Side notches on md+ */}
            <div className=" md:block absolute top-1/2 -left-4 w-6 h-6 bg-gray-50 rounded-full transform -translate-y-1/2"></div>
            <div className=" md:block absolute top-1/2 -right-4 w-6 h-6 bg-gray-50 rounded-full transform -translate-y-1/2"></div>

            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-600">
              {f.departure.airport.split(",")[0]} → {f.arrival.airport.split(",")[0]}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mb-4">
              Non Stop • {f.duration}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center">
                <img src="/icons/airplane.svg" alt="Airline" className="h-5 w-5 mr-2" />
                <span className="font-medium text-gray-700 text-sm sm:text-base">
                  {f.airline}
                </span>
              </div>
              <span className="text-gray-500 text-sm">{f.flightNumber}</span>
              <span className="ml-auto text-xs sm:text-sm text-gray-400">
                {f.aircraft}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="font-semibold text-gray-800 text-lg">
                  {f.departure.time}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">
                  {f.departure.airport}
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-lg">
                  {f.arrival.time}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">
                  {f.arrival.airport}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 border-t pt-4 text-gray-600 text-xs sm:text-sm">
              <div className="flex items-center">
                <img src="/icons/cabin.svg" alt="Cabin" className="h-4 w-4 mr-1" />
                <span>{f.cabinBaggage}</span>
              </div>
              <div className="flex items-center">
                <img src="/icons/luggage.svg" alt="Check-In" className="h-4 w-4 mr-1" />
                <span>{f.checkInBaggage}</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 text-sm sm:text-base">
                Proceed to Book
              </button>
            </div>
          </div>
        </section>

        {/* Fare Summary Sidebar */}
        <aside className="col-span-1">
          <div className="bg-white rounded-2xl shadow p-6 space-y-4 mb-6">
            <h3 className="text-lg font-semibold">Fare Summary</h3>
            <div className="flex justify-between text-sm">
              <span>Base Fare</span>
              <span>₹ {f.fare.base.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Taxes &amp; Fees</span>
              <span>₹ {f.fare.taxes.toLocaleString()}</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-semibold text-sm">
              <span>Total Amount</span>
              <span>₹ {f.fare.total.toLocaleString()}</span>
            </div>

            <div>
              <input
                type="text"
                placeholder="Enter promo code"
                className="w-full border rounded-lg px-4 py-2 text-sm"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="font-semibold mb-2">Cancellation Policy</h4>
            <p className="text-sm text-gray-600">Non-refundable</p>
          </div>
        </aside>
      </main>

      {/* Newsletter Footer */}
      <NewsletterContainer />
    </div>
  );
};

export default TicketPage;
