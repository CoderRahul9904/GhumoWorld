import React, { useState, useEffect } from 'react';
import { Button } from '../components/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/card';
import { Badge } from '../components/badge';
import { useToast } from '../hooks/use-toast';
import { Plane, User, Clock, MapPin } from 'lucide-react';
import Header from '../components/Header';
import NewsletterContainer from '../components/NewsletterContainer';

const SeatBook = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [seats, setSeats] = useState([]);
  const [flightData, setFlightData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Mock data based on your API structure
  const mockFlightData = {
    id: "1",
    type: "seatmap",
    departure: {
      iataCode: "NCE",
      terminal: "2",
      at: "2023-08-01T06:45:00"
    },
    arrival: {
      iataCode: "ORY",
      terminal: "2",
      at: "2023-08-01T08:15:00"
    },
    carrierCode: "AF",
    number: "6201",
    aircraft: {
      code: "320"
    },
    decks: [{
      deckType: "MAIN",
      deckConfiguration: {
        width: 7,
        length: 33,
        startSeatRow: 1,
        endSeatRow: 32,
        startWingsRow: 13,
        endWingsRow: 13,
        exitRowsX: [12, 13]
      },
      facilities: []
    }]
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setFlightData(mockFlightData);
      generateSeats(mockFlightData);
      setIsLoading(false);
    }, 1000);
  }, []);

  const generateSeats = (data) => {
    const deck = data.decks[0];
    const config = deck.deckConfiguration;
    const generatedSeats = [];
    const columns = ['A', 'B', 'C', 'D', 'E', 'F'];

    for (let row = config.startSeatRow; row <= config.endSeatRow; row++) {
      for (let colIndex = 0; colIndex < 6; colIndex++) {
        const column = columns[colIndex];
        const isExitRow = config.exitRowsX.includes(row);
        const isWingRow = row >= config.startWingsRow && row <= config.endWingsRow;
        
        // Skip aisle middle
        if (colIndex === 2 || colIndex === 3) continue;

        const seatType = row <= 3
          ? 'business'
          : isExitRow
            ? 'exit'
            : 'economy';

        const isAvailable = Math.random() > 0.3; // 70% availability

        generatedSeats.push({
          id: `${row}${column}`,
          row,
          column,
          isAvailable,
          isSelected: false,
          type: seatType,
          price: seatType === 'business' ? 150 : isExitRow ? 50 : 25
        });
      }
    }

    setSeats(generatedSeats);
  };

  const handleSeatSelect = (seatId) => {
    const seat = seats.find(s => s.id === seatId);
    if (!seat || !seat.isAvailable) return;

    const willSelect = selectedSeat !== seatId;
    setSelectedSeat(willSelect ? seatId : null);

    setSeats(prev =>
      prev.map(s =>
        s.id === seatId
          ? { ...s, isSelected: willSelect }
          : { ...s, isSelected: false }
      )
    );

    toast({
      title: willSelect ? "Seat Selected" : "Seat Deselected",
      description: `Seat ${seatId} ${willSelect ? 'selected' : 'deselected'}`,
    });
  };

  const getSeatColor = (seat) => {
    if (!seat.isAvailable) return 'bg-muted text-muted-foreground';
    if (seat.isSelected) return 'bg-primary text-primary-foreground';

    switch (seat.type) {
      case 'business':
        return 'bg-purple-100 hover:bg-purple-200 text-purple-900 border-purple-300';
      case 'exit':
        return 'bg-green-100 hover:bg-green-200 text-green-900 border-green-300';
      default:
        return 'bg-blue-100 hover:bg-blue-200 text-blue-900 border-blue-300';
    }
  };

  const renderSeatMap = () => {
    if (!flightData) return null;
    const rows = Array.from(new Set(seats.map(s => s.row))).sort((a, b) => a - b);

    return (
      <div className="bg-card p-6 rounded-lg border">
        {/* Aircraft Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <Plane color="#1262af" className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>

        {/* Seats */}
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {rows.map(row => {
            const rowSeats = seats.filter(s => s.row === row);
            const leftSeats = rowSeats.filter(s => ['A','B'].includes(s.column));
            const rightSeats = rowSeats.filter(s => ['E','F'].includes(s.column));
            return (
              <div key={row} className="flex items-center justify-center gap-4">
                <div className="w-8 text-center text-sm font-medium text-muted-foreground">{row}</div>

                <div className="flex gap-1">
                  {leftSeats.map(seat => (
                    <Button
                      key={seat.id}
                      variant="outline"
                      size="sm"
                      className={`w-8 h-8 p-0 text-xs ${getSeatColor(seat)}`}
                      onClick={() => handleSeatSelect(seat.id)}
                      disabled={!seat.isAvailable}
                    >
                      {seat.column}
                    </Button>
                  ))}
                </div>

                <div className="w-8 border-l border-r border-muted bg-muted/30 h-8 flex items-center justify-center">
                  <div className="w-1 h-6 bg-muted-foreground/20 rounded"></div>
                </div>

                <div className="flex gap-1">
                  {rightSeats.map(seat => (
                    <Button
                      key={seat.id}
                      variant="outline"
                      size="sm"
                      className={`w-8 h-8 p-0 text-xs ${getSeatColor(seat)}`}
                      onClick={() => handleSeatSelect(seat.id)}
                      disabled={!seat.isAvailable}
                    >
                      {seat.column}
                    </Button>
                  ))}
                </div>

                <div className="w-8 text-center text-sm font-medium text-muted-foreground">{row}</div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <Legend color="blue" label="Economy" />
          <Legend color="purple" label="Business" />
          <Legend color="green" label="Exit Row" />
          <Legend muted label="Occupied" />
          <Legend primary label="Selected" />
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Plane color="#1262af" className="w-12 h-12 mx-auto mb-4 animate-pulse text-primary" />
          <p className="text-muted-foreground">Loading seat map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header bgColor="blue" />
      <div
          className={`self-stretch [background:linear-gradient(100.3deg,_#114f8b,_#2a9ad7)] flex flex-col items-start justify-start text-left text-42xl text-white font-baloo-bhai`}
        >
      <div className=" z-0 self-stretch relative h-[350px]">
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] h-[350px]" />
        <img
          className="absolute w-full top-[0.4px] right-[0px] left-[0px] max-w-full overflow-hidden h-[350px] object-cover"
          alt=""
          src="/banner--background@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] w-full h-[350px] flex flex-col items-center justify-center py-0 px-[140px] box-border gap-[43px] md:pl-[30px] md:pr-[30px] md:box-border">
          <div className="self-stretch flex flex-col items-center justify-start gap-[5px]">
            <div className="self-stretch relative leading-[67px] sm:text-23xl sm:leading-[48px]">Select Your Seat !!!</div>
            <div className="self-stretch relative text-5xl leading-[32px] font-roboto">
              Choose your preferred seat for your journey
            </div>
        </div>
        </div>
       </div>
       </div>
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Flight Info Card */}
        {flightData && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plane color="#1262af" className="w-5 h-5" />
                Flight {flightData.carrierCode}{flightData.number}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 grid-cols-3 gap-4">
                <FlightInfo icon={<MapPin color='#1262af' />} code={flightData.departure.iataCode} time={new Date(flightData.departure.at).toLocaleTimeString()} />
                <FlightInfo icon={<Clock color="#1262af" />} label="Duration" detail="1h 30m" />
                <FlightInfo icon={<MapPin color='#1262af' />} code={flightData.arrival.iataCode} time={new Date(flightData.arrival.at).toLocaleTimeString()} />
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-[2fr_1fr] md:grid-cols-1 gap-6">
          {/* Seat Map */}
          <div className="lg:col-span-2">{renderSeatMap()}</div>

          {/* Selection & Features */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Your Selection</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedSeat ? (
                  <SelectionSummary seat={seats.find(s => s.id === selectedSeat)} />
                ) : (
                  <NoSelectionPlaceholder />
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Seat Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Feature name="Business Class" color="purple" desc="Extra legroom, priority boarding" />
                <Feature name="Exit Row" color="green" desc="Extra legroom, emergency exit access" />
                <Feature name="Economy" color="blue" desc="Standard seating" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <NewsletterContainer />
    </div>
  );
};

const Legend = ({ color, label, muted, primary }) => {
  let base = 'w-4 h-4 rounded border';
  if (muted) base += ' bg-muted';
  else if (primary) base += ' bg-primary';
  else base += ` bg-${color}-100 border-${color}-300`;
  return (
    <div className="flex items-center gap-2">
      <div className={base}></div>
      <span className="text-sm">{label}</span>
    </div>
  );
};

const FlightInfo = ({ icon, code, time, label, detail }) => (
  <div className="flex items-center gap-2">
    {React.cloneElement(icon, { className: 'w-4 h-4 text-muted-foreground' })}
    <div>
      {code && <p className="font-medium">{code}</p>}
      {time && <p className="text-sm text-muted-foreground">{time}</p>}
      {label && <p className="font-medium">{label}</p>}
      {detail && <p className="text-sm text-muted-foreground">{detail}</p>}
    </div>
  </div>
);

const SelectionSummary = ({ seat }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-2">
      <User color="#1262af" className="w-4 h-4" />
      <span>Seat {seat.id}</span>
      <Badge variant="secondary">{seat.type}</Badge>
    </div>
    <div className="text-2xl font-bold">${seat.price}</div>
    <Button className="w-full" size="lg">Confirm Selection</Button>
  </div>
);

const NoSelectionPlaceholder = () => (
  <div className="text-center py-8">
    <User color="#1262af" className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
    <p className="text-muted-foreground">No seat selected</p>
    <p className="text-sm text-muted-foreground mt-2">Click on any available seat to select</p>
  </div>
);

const Feature = ({ name, color, desc }) => (
  <div>
    <h4 className={`font-medium text-${color}-900`}>{name}</h4>
    <p className="text-sm text-muted-foreground">{desc}</p>
  </div>
);

export default SeatBook;
