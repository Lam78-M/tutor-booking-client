"use client";

import React, { useEffect, useState } from "react";
import { EditModal } from "@/components/EditModal";
import { DeleteTutors } from "@/components/DeleteTutors";

const HomePageTutor = () => {
  const [tutors, setTutors] = useState([]);

  const fetchTutors = async () => {
    const res = await fetch("http://localhost:5000/add-tutor");
    const data = await res.json();
    setTutors(data);
  };

  useEffect(() => {
    fetchTutors();
  }, []);

  return (
    <div className="container mx-auto lg:px-20 mt-40 mb-20">

      {/* TITLE */}
      <h1 className="text-4xl text-center font-semibold mb-10 text-gray-900 dark:text-white">
        Teacher Panel
      </h1>

      {/* TABLE WRAPPER */}
      <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0f172a]">

        <table className="w-full text-sm text-left text-gray-900 dark:text-white">

          {/* TABLE HEAD */}
          <thead className="bg-green-700 dark:bg-green-800 text-white">
            <tr>
              <th className="px-4 py-3">Tutor Name</th>
              <th className="px-4 py-3">Subject</th>
              <th className="px-4 py-3">Available Time Slot</th>
              <th className="px-4 py-3">Session Start</th>
              <th className="px-4 py-3">Total Slot</th>
              <th className="px-4 py-3">Fees</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>
            {tutors.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-10 text-gray-500 dark:text-gray-400"
                >
                  No teacher found
                </td>
              </tr>
            ) : (
              tutors.map((tutor) => (
                <tr
                  key={tutor._id}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-[#1e293b] transition"
                >
                  <td className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">
                    {tutor.tutorName}
                  </td>

                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                    {tutor.subject}
                  </td>

                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                    {tutor.available}
                  </td>

                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                    {tutor.sessionStart}
                  </td>

                  <td className="px-4 py-3 text-green-600 dark:text-green-400 font-semibold">
                    {tutor.totalSlot}
                  </td>

                  <td className="px-4 py-3 text-green-600 dark:text-green-400 font-semibold">
                    {tutor.hourlyFee} BDT
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <EditModal tutor={tutor} fetchTutors={fetchTutors} />
                      <DeleteTutors tutor={tutor} />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default HomePageTutor;