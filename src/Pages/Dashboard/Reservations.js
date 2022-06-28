import React, { useEffect, useState } from "react";
import Reservation from "./Reservation";

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/rooms')
      .then((res) => res.json())
      .then((data) => setReservations(data));
  }, []);
  return (
    <div className="mb-16">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reservations.map((reservation) => (
          <Reservation
            key={reservation._id}
            reservation={reservation}
          ></Reservation>
        ))}
      </div>
    </div>
  );
};

export default Reservations;
