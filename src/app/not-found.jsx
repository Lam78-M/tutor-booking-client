import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#124170] text-white px-6">
      
      <div className="text-center max-w-md">

        {/* Big 404 */}
        <h1 className="text-8xl font-extrabold text-[#AAFFC7]">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-white">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 rounded-lg bg-[#67C090] text-[#124170] font-semibold hover:scale-105 transition-all duration-200"
        >
          Go Back Home
        </Link>

      </div>
    </div>
  );
}