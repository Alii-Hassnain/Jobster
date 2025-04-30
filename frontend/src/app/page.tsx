"use client"; // Required for client-side fetching
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    // Fetch data from Node.js backend
    axios
      .get("http://localhost:5000/api/message")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setMessage("Failed to fetch message");
      });
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-row items-center gap-2 my-12">
        <h1 className="text-5xl border inline py-2 px-8 bg-gray-800 text-white font-bold rounded-2xl">
          J
        </h1>
        <h1 className="font-bold text-4xl text-gray-800">Jobster</h1>
      </div>

      {/* Grid: Text + Button (Left) and Image (Right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Text and Button */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Job tracking app</h2>
          <p className="text-lg text-gray-600">
            Explore thousands of job opportunities on Jobster. From tech to
            finance, we connect you with top employers worldwide.
          </p>
          <Link
            href="/auth"
            className="inline-block bg-blue-950 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Register / Login
          </Link>
        </div>

        {/* Right Column: Image */}
        <div>
          <Image
            src="/images/banner.png" // Replace with your image or placeholder
            alt="Job Board Banner"
            width={500}
            height={400}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </main>
  );
}