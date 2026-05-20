const MyBookedSessions = ({ searchParams }) => {

  const tutorName = searchParams.tutorName;
  const subject = searchParams.subject;
  const photo = searchParams.photo;
  const fee = searchParams.fee;

  return (
    <div className="max-w-4xl mx-auto mt-20">

      <div className="border p-6 rounded-2xl shadow-xl">

       

        <h1 className="text-3xl font-bold mt-4">
          {tutorName}
        </h1>

        <p>{subject}</p>

        <p>{fee} BDT/hour</p>

        <div className="flex gap-4 mt-5">

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Edit
          </button>

          <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
            Delete
          </button>

        </div>

      </div>

    </div>
  );
};

export default MyBookedSessions;