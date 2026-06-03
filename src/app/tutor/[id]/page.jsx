import { SessionConfirm } from "@/components/SessionConfirm";
import Image from "next/image";
import { FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import {
  MdOutlineSchool,
  MdOutlineLaptop,
  MdOutlineCalendarMonth,
  MdOutlineEventAvailable,
  MdOutlineVerified,
  MdOutlineAttachMoney,
} from "react-icons/md";

const TutorDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/tutor/${id}`, {
    cache: "no-store",
  });

  const tutor = await res.json();

  const initials = tutor.tutorName
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">

      {/* Hero */}
      <div className="relative rounded-2xl overflow-hidden h-64 bg-gradient-to-br from-green-900 via-green-700 to-emerald-500 flex items-center justify-center">
        {tutor.photo ? (
          <Image
            src={tutor.photo}
            alt={tutor.tutorName}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-white text-3xl font-semibold">
            {initials}
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute top-4 left-4">
          <span className="flex items-center gap-1 bg-white/15 backdrop-blur-sm border border-white/30 text-white text-xs px-3 py-1.5 rounded-full">
            <MdOutlineSchool className="text-sm" />
            {tutor.institution}
          </span>
        </div>

        <div className="absolute top-4 right-4">
          <span className="bg-green-500 text-white text-xs font-medium px-3 py-1.5 rounded-full">
            {tutor.teachingMode}
          </span>
        </div>

        <div className="absolute bottom-5 left-5">
          <h1 className="text-2xl font-semibold text-white">{tutor.tutorName}</h1>
          <p className="text-white/70 text-sm mt-0.5">{tutor.institution}</p>
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-4 mt-4">

        {/* Left */}
        <div className="flex flex-col gap-4">

          {/* Subjects */}
          <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-5">
            <p className="text-[11px] font-medium uppercase tracking-widest text-gray-400 mb-3">
              Subject
            </p>
            <div className="flex flex-wrap gap-2">
              {tutor.subject?.split(",").map((sub, i) => (
                <span
                  key={i}
                  className="text-sm px-4 py-1.5 rounded-full bg-green-50 dark:bg-green-950 border border-green-300 dark:border-green-700 text-green-800 dark:text-green-300"
                >
                  {sub.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Session info */}
          <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-5">
            <p className="text-[11px] font-medium uppercase tracking-widest text-gray-400 mb-3">
              Session Info
            </p>

            {[
              {
                icon: <FaMapMarkerAlt className="text-gray-400" />,
                label: "Location",
                value: tutor.location,
              },
              {
                icon: <MdOutlineCalendarMonth className="text-gray-400 text-lg" />,
                label: "Availability",
                value: tutor.available,
              },
              {
                icon: <MdOutlineEventAvailable className="text-gray-400 text-lg" />,
                label: "Session Start",
                value: tutor.sessionStart,
              },
              {
                icon: <MdOutlineLaptop className="text-gray-400 text-lg" />,
                label: "Teaching Mode",
                value: tutor.teachingMode,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 py-2.5 border-b border-gray-100 dark:border-gray-800 last:border-none"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400">{item.label}</p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Slots */}
          <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-5">
            <p className="text-[11px] font-medium uppercase tracking-widest text-gray-400 mb-3">
              Available Slots
            </p>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
              {tutor.totalSlot} total slots open
            </p>
            <p className="text-xs text-gray-400 mt-1.5 flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              Contact tutor to confirm your preferred time
            </p>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="flex flex-col gap-4">

          {/* Fee + booking */}
          <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-5">
            <p className="text-xs text-gray-400 mb-1">Hourly rate</p>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">
                {tutor.hourlyFee}
              </span>
              <span className="text-sm text-gray-400">BDT / hour</span>
            </div>

            <hr className="my-4 border-gray-100 dark:border-gray-800" />

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Total Slots</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {tutor.totalSlot}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Mode</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {tutor.teachingMode}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Session Start</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {tutor.sessionStart}
                </span>
              </div>
            </div>

            <hr className="my-4 border-gray-100 dark:border-gray-800" />

         {/* booked session button */}
         
             <SessionConfirm/>
          
          </div>

          {/* Tutor mini profile */}
          <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-700 dark:text-green-300 font-semibold text-sm flex-shrink-0">
                {initials}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {tutor.tutorName}
                </p>
                <p className="text-xs text-gray-400">{tutor.institution}</p>
              </div>
              <MdOutlineVerified className="ml-auto text-green-500 text-xl" />
            </div>

            <hr className="my-3 border-gray-100 dark:border-gray-800" />

            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <FaMapMarkerAlt className="text-gray-400 flex-shrink-0" />
              {tutor.location}
            </div>

            <div className="flex items-center gap-2 text-sm text-green-700 dark:text-green-400 font-medium mt-2">
              <MdOutlineAttachMoney className="text-base flex-shrink-0" />
              {tutor.hourlyFee} BDT / hour
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDetailsPage;