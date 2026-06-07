"use client";

import { useEffect, useState } from "react";

export default function BookingsBook() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/bookings")
      .then((res) => res.json())
      .then((data) => {
        const updated = data.map((b) => ({
          ...b,
          status: b.status || "Confirmed",
          isCancelled: false,
        }));

        setBookings(updated);
      });
  }, []);

  const handleCancel = (id) => {
    const updated = bookings.map((b) =>
      b._id === id
        ? { ...b, status: "Cancelled", isCancelled: true }
        : b
    );

    setBookings(updated);
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">

      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        My Booked Sessions
      </h1>

      <div className="overflow-x-auto border rounded-xl bg-white dark:bg-[#0f172a] shadow-sm">

        <table className="w-full text-sm text-left text-gray-900 dark:text-white">

          <thead className="bg-gray-100 dark:bg-[#1e293b] text-gray-900 dark:text-gray-300 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Tutor Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-center">Cancel</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b) => (
              <tr
                key={b._id}
                className="border-b border-gray-200 dark:border-gray-700 transition"
              >

                <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-300">
                  {b.studentName}
                </td>

                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                  {b.phone}
                </td>

                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                  {b.tutorInfo?.name || b.tutorName || "N/A"}
                </td>

                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                  {b.studentEmail}
                </td>

                {/* STATUS */}
                <td className="px-4 py-3">
                  {b.status === "Confirmed" ? (
                    <span className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 text-xs px-2 py-1 rounded-md">
                      Confirmed
                    </span>
                  ) : (
                    <span className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 text-xs px-2 py-1 rounded-md">
                      Cancelled
                    </span>
                  )}
                </td>

                {/* CANCEL BUTTON */}
                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => handleCancel(b._id)}
                    disabled={b.isCancelled}
                    className={`text-lg transition ${
                      b.isCancelled
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-red-500 hover:text-red-700"
                    }`}
                  >
                    ✕
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
}