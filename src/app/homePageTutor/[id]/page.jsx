
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const TutorDetailsPage = async({params}) => {
  const {id}  = await params

  const res = await fetch (`http://localhost:5000/homepagetutor/${id}`)
  const homepagetutor = await res.json()

  const {photo, tutorName, subject, available, hourlyFee, totalSlot, sessionStart, institution, location, teachingMode} = homepagetutor


  console.log(homepagetutor)
    return (
<div className="max-w-7xl mx-auto border border-green-500 rounded-2xl p-6 shadow-lg bg-white dark:bg-gray-900 hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row gap-6 mt-30 mb-30">

  {/* IMAGE LEFT */}
  <div className="md:w-1/3 w-full">
    <Image
      src={photo}
      alt={tutorName}
      width={400}
      height={300}
      className="w-full h-70 object-cover rounded-xl hover:scale-105 transition-transform duration-300 border border-green-500"
    />
  </div>

  {/* CONTENT RIGHT */}
  <div className="md:w-2/3 w-full flex flex-col justify-between">

    {/* TOP INFO */}
    <div className="space-y-2">

      <p className="text-sm text-gray-500 dark:text-gray-400">
        📍 {location}
      </p>

      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
        {tutorName}
      </h2>

      <p className="text-sm text-gray-600 dark:text-gray-300">
        <span className="font-semibold">Subject:</span> {subject}
      </p>

      <p className="text-sm text-gray-600 dark:text-gray-300">
        <span className="font-semibold">Institution:</span> {institution}
      </p>

      <p className="text-sm text-gray-600 dark:text-gray-300">
        <span className="font-semibold">Session Start:</span> {sessionStart}
      </p>

      <p className="text-sm text-gray-600 dark:text-gray-300">
        <span className="font-semibold">Mode:</span> {teachingMode}
      </p>

      <p className="text-sm text-gray-600 dark:text-gray-300">
        <span className="font-semibold">Slots:</span> {totalSlot}
      </p>

      <p className="text-sm text-green-600 font-medium">
        {available}
      </p>

    </div>

    {/* BOTTOM */}
    <div className="mt-5 flex items-center justify-between">

      <p className="text-lg font-bold text-violet-600">
        💰 {hourlyFee} BDT / hour
      </p>

     <Link href={'/my-tutors'}>
      <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-green-600 to-green-800 text-white font-medium hover:scale-105 transition">
        Add Session
      </button>
     </Link>

    </div>

  </div>
</div>
    );
};

export default TutorDetailsPage;