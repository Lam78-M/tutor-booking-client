"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function BookingsBook() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const getBookings = async () => {
      try {
        // ১. Auth client theke user ba session details niye asha
        const { data: sessionData } = await authClient.getSession(); 
        const currentUserEmail = sessionData?.user?.email; // Login kora user er email

        const { data: tokenData } = await authClient.token();
        console.log(tokenData);

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
          headers: {
            Authorization: `Bearer ${tokenData?.token}`,
          },
        });

        const data = await res.json();

        // 🌟 ২. FILTER LOGIC: Shudhu login kora user-er bookings filter kora
        // (Tomar database field jodi 'studentEmail' hoy, tobe tar sathe match korbe)
        const loggedInUserBookings = data.filter(
          (b) => b.studentEmail === currentUserEmail
        );

        // localStorage থেকে আগে ক্যানসেল করা আইডিগুলোর লিস্ট নিয়ে আসা
        const savedCancelledIds = JSON.parse(localStorage.getItem("cancelledBookings")) || [];

        // Filtered data-r upor map chalano
        const updated = loggedInUserBookings.map((b) => {
          const isLocallyCancelled = savedCancelledIds.includes(b._id);

          return {
            ...b,
            status: isLocallyCancelled ? "Cancelled" : (b.status || "Confirmed"),
            isCancelled: isLocallyCancelled || b.status === "Cancelled",
          };
        });

        setBookings(updated);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    getBookings();
    document.title = "My booked tutor";
  }, []);

  const handleCancel = (id) => {
    const updated = bookings.map((b) =>
      b._id === id
        ? { ...b, status: "Cancelled", isCancelled: true }
        : b
    );
    setBookings(updated);

    const savedCancelledIds = JSON.parse(localStorage.getItem("cancelledBookings")) || [];
    if (!savedCancelledIds.includes(id)) {
      savedCancelledIds.push(id);
      localStorage.setItem("cancelledBookings", JSON.stringify(savedCancelledIds));
    }

    toast.success("Booking cancelled successfully!");
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        My Booked Sessions
      </h1>

      <div className="overflow-x-auto border rounded-xl bg-white dark:bg-[#0f172a] shadow-sm">
        {bookings.length === 0 ? (
          // 🌟 Empty State Handler
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            You havent booked any sessions yet.
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}