"use client";
import { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [type, setType] = useState("all");
  const [sort, setSort] = useState("latest");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ search, status, type, sort });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-md shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-full"
      />

      {/* 📌 Status Filter */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-full"
      >
        <option value="all">All Status</option>
        <option value="interview">Interview</option>
        <option value="declined">Declined</option>
        <option value="pending">Pending</option>
      </select>

      {/* ⚙️ Type Filter */}
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-full"
      >
        <option value="all">All Types</option>
        <option value="fulltime">Full-time</option>
        <option value="parttime">Part-time</option>
        <option value="remote">Remote</option>
        <option value="internship">Internship</option>
      </select>

      {/* 📊 Sort Filter */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-full"
      >
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="a-z">A - Z</option>
        <option value="z-a">Z - A</option>
      </select>

      {/* 🔍 Submit Button (optional) */}
      <button
        type="submit"
        className="md:col-span-2 lg:col-span-4 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
}
