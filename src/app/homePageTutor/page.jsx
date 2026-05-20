'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";

const HomePageTutor = () => {
  const [tutors, setTutors] = useState([]);
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const fetchTutors = async () => {
      const res = await fetch("http://localhost:5000/tutor");
      const data = await res.json();
      setTutors(data);
    };
    fetchTutors();
  }, []);

  // ---------------- FILTER LOGIC ----------------
  const filteredTutors = tutors
    .filter((tutor) => {
      const query = search.toLowerCase().trim();

      const matchSearch = search
        ? tutor.tutorName?.toLowerCase().includes(query) ||
          tutor.subject?.toLowerCase().includes(query) ||
          tutor.location?.toLowerCase().includes(query)
        : true;

      const tutorDate = new Date(tutor.sessionStart);
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;

      const matchStart = start ? tutorDate >= start : true;
      const matchEnd = end ? tutorDate <= end : true;

      return matchSearch && matchStart && matchEnd;
    })
    .slice(0, 6); // UI limit only

  // reset filters
  const resetFilters = () => {
    setSearch("");
    setStartDate("");
    setEndDate("");
  };

  // ---------------- UI ----------------
  return (
    <div className="container mx-auto lg:px-30 mt-40 mb-20">

      {/* FILTER SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">

        {/* Search */}
        <div>
          <label className="text-sm text-gray-600">Search Tutor</label>
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:text-white"
          />
        </div>

        {/* Start Date */}
        <div>
          <label className="text-sm text-gray-600">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:text-white"
          />
        </div>

        {/* End Date */}
        <div>
          <label className="text-sm text-gray-600">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:text-white"
          />
        </div>

        {/* Reset */}
       <div  className="flex items-end">
         <button
          onClick={resetFilters}
          className="w-full p-3  rounded-lg border hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Reset Filters
        </button>
       </div>
      </div>

      {/* TITLE */}
      <h1 className="text-4xl text-center font-semibold mb-10">
        Teacher Panel
      </h1>

      {/* CARDS */}
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        {filteredTutors.map((tutor) => (
          <div
            key={tutor._id}
            className="p-5 w-full max-w-sm rounded-2xl shadow-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden hover:scale-105 transition-all duration-300"
          >
            {/* IMAGE */}
            <Image
              src={tutor.photo}
              alt={tutor.tutorName}
              width={400}
              height={300}
              className="w-full h-56 object-cover rounded-xl"
            />

            {/* CONTENT */}
            <div className="mt-4 space-y-2 text-left">
              <h1 className="text-sm text-gray-600">{tutor.location}</h1>

              <h2 className="text-xl font-semibold">
                Name - {tutor.tutorName}
              </h2>

              <p className="text-sm text-gray-600 dark:text-gray-300">
                Subject: {tutor.subject}
              </p>

              <h2>Session Start: {tutor.sessionStart}</h2>

              <p className="font-semibold text-violet-600">
                💰 Fees: {tutor.hourlyFee} BDT / hour
              </p>

              <button className="w-full mt-2 p-2 rounded-lg bg-green-700 text-white hover:bg-green-800 transition">
                Read more
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default HomePageTutor;