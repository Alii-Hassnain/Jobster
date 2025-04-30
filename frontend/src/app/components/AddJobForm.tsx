"use client";
import { useState } from "react";

export default function AddJobForm({ onSubmit }) {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("interview");
  const [type, setType] = useState("full-time");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ position, company, location, status, type });
    clearForm();
  };

  const clearForm = () => {
    setPosition("");
    setCompany("");
    setLocation("");
    setStatus("interview");
    setType("full-time");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-md shadow-md grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {/* 📌 Position */}
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-full"
        required
      />

      {/* 🏢 Company */}
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-full"
        required
      />

      {/* 📍 Location */}
      <input
        type="text"
        placeholder="Job Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-full"
        required
      />

      {/* 📊 Status */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-full"
      >
        <option value="interview">Interview</option>
        <option value="declined">Declined</option>
        <option value="pending">Pending</option>
      </select>

      {/* ⚙️ Job Type */}
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-full"
      >
        <option value="full-time">Full-time</option>
        <option value="part-time">Part-time</option>
        <option value="remote">Remote</option>
        <option value="internship">Internship</option>
      </select>

      {/* 🔘 Buttons */}
      <div className="md:col-span-2 flex justify-end gap-4 mt-2">
        <button
          type="button"
          onClick={clearForm}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
        >
          Clear
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
