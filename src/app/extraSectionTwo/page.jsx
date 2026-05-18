"use client";

export default function ExtraSectionTwo() {
  return (
    <section className=" py-20 px-6 mt-20">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2572bf]">
            What Our Students Say
          </h2>

          <p className="mt-4 text-[#475569] max-w-2xl mx-auto">
            Real feedback from students who improved their skills using TutorFlow.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
            
            <div className="text-[#67C090] text-xl mb-3">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-[#475569] text-sm">
              “TutorFlow helped me improve my Math grades in just a few weeks.
              The tutor was very friendly and professional.”
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#AAFFC7]"></div>

              <div>
                <h4 className="text-[#2572bf] font-semibold">
                  Sarah Ahmed
                </h4>
                <span className="text-xs text-[#475569]">
                  HSC Student
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
            
            <div className="text-[#67C090] text-xl mb-3">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-[#475569] text-sm">
              “Booking a tutor was super easy. I learned Physics in a structured
              way and gained confidence.”
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#AAFFC7]"></div>

              <div>
                <h4 className="text-[#124170] font-semibold">
                  Tanvir Hasan
                </h4>
                <span className="text-xs text-[#475569]">
                  College Student
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
            
            <div className="text-[#67C090] text-xl mb-3">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-[#475569] text-sm">
              “Best platform for finding tutors. The UI is clean and the booking
              system works perfectly.”
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#AAFFC7]"></div>

              <div>
                <h4 className="text-[#124170] font-semibold">
                  Nusrat Jahan
                </h4>
                <span className="text-xs text-[#475569]">
                  University Student
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}