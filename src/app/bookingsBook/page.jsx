"use client";

import { useEffect, useState } from "react";

export default function BookingsBook() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-20">
      <h1 className="text-2xl font-bold mb-5">
        My Booked Sessions
      </h1>

      <div className="space-y-3">
        {bookings.map((b) => (
          <div key={b._id} className="border p-4 rounded-lg">
            <p>🎓 Tutor: {b.tutorName}</p>
            <p>👤 Student: {b.studentName}</p>
            <p>📧 Email: {b.studentEmail}</p>
            <p>📱 Phone: {b.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}