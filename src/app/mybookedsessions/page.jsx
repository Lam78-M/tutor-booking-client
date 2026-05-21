import React from 'react';

const MyBookedSession = async () => {

  const res = await fetch("http://localhost:5000/bookedsessions", {
    cache: "no-store",
  });

  const sessions = await res.json();

  return (
    <div className="max-w-7xl mx-auto mt-20 ">

      <h1 className="text-3xl font-bold mb-10 text-center">
        My Booked Sessions
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {sessions.map((session) => {
          const tutor = session.tutor;

          return (
            <div
              key={session._id}
              className="border p-5 rounded-2xl shadow-lg"
            >

              {/* IMAGE */}
             

              <div className="mt-4 space-y-2">

                <h2 className="text-2xl font-bold">
                  {tutor?.tutorName}
                </h2>

                <p>📘 {tutor?.subject}</p>

                <p>📍 {tutor?.location}</p>

                <p className="text-violet-600 font-bold">
                  💰 {tutor?.hourlyFee} BDT/hr
                </p>

                {/* BUTTONS */}
                <div className="flex gap-3 mt-4">

                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                    Cancel
                  </button>

                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
                    Pay
                  </button>

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default MyBookedSession;