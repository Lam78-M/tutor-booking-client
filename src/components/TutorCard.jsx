import React from "react";
import Image from "next/image";
import Link from "next/link";

const TutorCard = ({ tutor }) => {
  const {
   
    photo,
    tutorName,
    subject,
    available,
    hourlyFee,
    location,
  } = tutor;

  return (
    <div className="max-w-3xl border rounded-2xl p-4 shadow bg-white flex gap-4">

      <Image
        src={photo}
        alt={tutorName}
        width={200}
        height={150}
        className="rounded-lg object-cover"
      />

      <div className="flex-1">
        <h2 className="text-xl font-bold">{tutorName}</h2>
        <p>{subject}</p>
        <p>{location}</p>
        <p className="text-green-600">{available}</p>

        <div className="flex justify-between mt-3">
          <p className="font-bold text-violet-600">
            💰 {hourlyFee} BDT/hr
          </p>

          <Link href={`/homepagetutor/${_id}`}>
            <button className="bg-green-600 text-white px-3 py-1 rounded">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;