import React from "react";
import Image from "next/image";
import { FaMoneyBillWave } from "react-icons/fa";

const Tutor = async () => {
  const res = await fetch("http://localhost:5000/tutor", {
    cache: "no-store",
  });

  let tutors = await res.json();



  return (
  
    <div className="container mx-auto lg:px-30 mt-40 mb-20">
      <h1 className="text-4xl text-center font-semibold mb-10">Teacher Panel</h1>
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tutors.map((tutor) => (
          <div
            key={tutor._id}
            className="p-5 w-full max-w-sm rounded-2xl shadow-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden hover:scale-105 transition-all duration-300"
          >
            {/* Image */}
            <Image
              src={tutor.photo}
              alt={tutor.tutorName}
              width={400}
              height={300}
              className="w-full h-56 object-cover rounded-xl"
            />

            {/* Content */}
            <div className="mt-4 space-y-2 text-left">
                <h1 className="text-sm text-gray-600">{tutor.location}</h1>
              <h2 className="text-xl font-semibold"><span className="text-gray-600 font-normal ">Name</span>-{tutor.tutorName}</h2>

              <p className="text-sm text-gray-600 dark:text-gray-300">
                Subject : {tutor.subject}
              </p>
              <h2>Session Start : {tutor.sessionStart}</h2>

            
          

              <p className="font-semibold text-violet-700 flex items-center gap-2">
              <FaMoneyBillWave className="text-[#cfb313]" /> Fees :  {tutor.hourlyFee} BDT / hour
              </p>

           <button className="w-full mt-2 p-2 rounded-lg bg-green-700 text-white hover:bg-green-700 transition">
  Read more
</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutor;     