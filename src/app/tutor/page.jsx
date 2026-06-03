"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaMoneyBillWave } from "react-icons/fa";
import Link from "next/link";


const TutorAllPage = () => {
  const [tutors, setTutors] = useState([]);
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const fetchTutors = async () => {
      const res = await fetch(
        `http://localhost:5000/tutor?search=${search}&startDate=${startDate}&endDate=${endDate}`
      );

      const data = await res.json();
      setTutors(data);
    };

    fetchTutors();
  }, [search, startDate, endDate]);

  const handleReset = () => {
    setSearch("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <div className="container mx-auto lg:px-30 mt-40 mb-20">
      <h1 className="text-4xl text-center font-semibold mb-10">
        Teacher Panel
      </h1>

      {/* Filter Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        <div>
          <label className="block mb-2 text-sm font-medium">
            Search Tutor
          </label>

          <input
            type="text"
            placeholder="Search tutor by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            Start Date
          </label>

          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            End Date
          </label>

          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div className="flex items-end">
          <button
            onClick={handleReset}
            className="w-full border rounded-lg py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Tutor Cards */}
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tutors.map((tutor) => (
          <div
            key={tutor._id}
            className="p-5 w-full max-w-sm rounded-2xl shadow-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden hover:scale-105 transition-all duration-300"
          >
            <Image
              src={tutor.photo}
              alt={tutor.tutorName}
              width={400}
              height={300}
              className="w-full h-56 object-cover rounded-xl"
            />

            <div className="mt-4 space-y-2 text-left">
              <h1 className="text-sm text-gray-600">
                {tutor.location}
              </h1>

              <h2 className="text-xl font-semibold">
                <span className="text-gray-600 font-normal">
                  Name
                </span>{" "}
                - {tutor.tutorName}
              </h2>

              <p className="text-sm text-gray-600 dark:text-gray-300">
                Subject : {tutor.subject}
              </p>

              <h2>
                Session Start : {tutor.sessionStart}
              </h2>

              <p className="font-semibold text-violet-700 flex items-center gap-2">
                <FaMoneyBillWave className="text-[#cfb313]" />
                Fees : {tutor.hourlyFee} BDT / hour
              </p>

            <div className="flex gap-2 mt-3">
  
 <Link href={`/tutor/${tutor._id}`} className="w-full">
  <button className="w-full py-2 rounded-lg bg-green-700 text-white hover:bg-green-800 transition">
    Book Tutor
  </button>
</Link>

</div>
            </div>
          </div>
        ))}
      </div>

      {tutors.length === 0 && (
        <div className="text-center mt-10 text-gray-500">
          No tutor found.
        </div>
      )}
    </div>
  );
};

export default TutorAllPage;