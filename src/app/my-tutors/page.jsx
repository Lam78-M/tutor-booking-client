import React from "react";
import Image from "next/image";
import { FaEdit, FaMoneyBillWave, FaRegTrashAlt, FaTrash } from "react-icons/fa";
import { BiSolidEditAlt } from "react-icons/bi";

const MyTutors = async () => {
  const res = await fetch("http://localhost:5000/tutor", {
    cache: "no-store",
  });

  let tutors = await res.json();



  return (
  
   <div className="container mx-auto lg:px-30 mt-30 mb-40">
  <h1 className="text-4xl text-center font-semibold mb-10">
    Teacher Panel
  </h1>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse bg-white dark:bg-gray-900 shadow-lg rounded-xl overflow-hidden">

      {/* Head */}
      <thead className="bg-gray-200 dark:bg-gray-800 text-left">
        <tr>
          <th className="p-3">Name</th>
          <th className="p-3">Subject</th>
   
          <th className="p-3">Session Start</th>
          <th className="p-3">Slot</th>
          <th className="p-3">Fees</th>
          <th className="p-3">Actions</th>
          
        </tr>
      </thead>

      {/* Body */}
      <tbody>
        {tutors.slice(0, 6).map((tutor) => (
          <tr
            key={tutor._id}
            className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <td className="p-3">{tutor.tutorName}</td>
             <td className="p-3">{tutor.subject}</td>
           
            <td className="p-3">{tutor.sessionStart}</td>
            <td className="p-3">{tutor.totalSlot}</td>
            <td className="p-3 text-violet-700 font-semibold">
              {tutor.hourlyFee} BDT/hr
            </td>
               <td className="p-3">
                  <div className="flex gap-3">

                    {/* Edit */}
                    <button
                      className= " border p-2 text-blue-600 hover:text-blue-800 text-lg hover:bg-green-200"
                      title="Edit"
                    >
                    <BiSolidEditAlt />
                    </button>

                    {/* Delete */}
                    <button
                      className= "border p-2  text-red-600 hover:text-red-800 text-lg hover:bg-green-200"
                      title="Delete"
                    >
                     <FaRegTrashAlt />
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

export default MyTutors;     