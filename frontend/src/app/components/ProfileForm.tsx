"use client";
import { useState } from "react";

export default function ProfileForm({ onSave }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, lastName, email, location });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-md shadow-md grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {/* 👤 Name */}
      <input
        type="text"
        placeholder="First Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-full"
        required
      />

      {/* 👤 Last Name */}
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-full"
        required
      />

      {/* 📧 Email */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-full"
        required
      />

      {/* 📍 Location */}
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-full"
        required
      />

      {/* 💾 Save Button */}
      <div className="md:col-span-2 flex justify-end mt-2">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
