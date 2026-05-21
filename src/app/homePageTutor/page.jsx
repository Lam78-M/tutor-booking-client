'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HomePageTutor = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    const fetchTutors = async () => {
      const res = await fetch("http://localhost:5000/tutor");
      const data = await res.json();
      setTutors(data);
    };

    fetchTutors();
  }, []);

  return (
    <div className="container mx-auto lg:px-20 mt-40 mb-20">

      {/* TITLE */}
      <h1 className="text-4xl text-center font-semibold mb-10">
        Teacher Panel
      </h1>

      {/* TABLE */}
      <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">

        <table className="table w-full">

          {/* TABLE HEAD */}
          <thead className="bg-green-700 text-white">
            <tr>
         
              <th>Tutor Name</th>
              <th>Subject</th>
              <th>Available</th>
              <th>Session Start</th>
              <th>Total Slot</th>
              <th>Fees</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>

            {tutors.map((tutor) => (
              <tr
                key={tutor._id}
                className="hover:bg-gray-100 dark:hover:bg-gray-900 transition"
              >

                {/* PHOTO */}
              

                {/* NAME */}
                <td className="font-semibold">
                  {tutor.tutorName}
                </td>

                {/* SUBJECT */}
                <td>
                  {tutor.subject}
                </td>

                {/* LOCATION */}
                <td>
                  {tutor.available}
                </td>

                {/* SESSION */}
                <td>
                  {tutor.sessionStart}
                </td>

                {/* FEES */}
                <td className="text-green-600 font-semibold">
                  {tutor.totalSlot} 
                </td>
                  <td className="text-green-600 font-semibold">
                  {tutor.totalSlot} BDT
                </td>

                {/* BUTTON */}
              <td>
  <div className="flex items-center gap-2">

    {/* EDIT BUTTON */}
    <Link href={`/updateTutor/${tutor._id}`}>
      <button className="px-3 py-1 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-700 transition">
        Edit
      </button>
    </Link>

    {/* DELETE BUTTON */}
    <button
      className="px-3 py-1 text-sm rounded-md bg-red-500 text-white hover:bg-red-700 transition"
    >
      Delete
    </button>

  </div>
</td>

              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePageTutor;