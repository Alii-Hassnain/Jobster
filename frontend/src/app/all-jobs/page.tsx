"use client";

import React, { useState, useEffect, useCallback } from "react";
import Layout from "../components/Layout";
import SearchForm from "../components/SearchForm";
import axios from "axios";
import JobBox from "../components/JobBox";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔍 Filter states
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [type, setType] = useState("all");
  const [sort, setSort] = useState("latest");

  // 📦 Fetch jobs function
  const fetchJobs = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_URI}/jobs`, {
        params: { search, status, type, sort },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
    setLoading(false);
  }, [search, status, type, sort]);

  // 📥 Load jobs when filters change
  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  // 🔍 Handle search from SearchForm
  const handleSearch = (filters) => {
    setSearch(filters.search);
    setStatus(filters.status);
    setType(filters.type);
    setSort(filters.sort);
  };

  return (
    <Layout>
      <SearchForm onSearch={handleSearch} />

      <div className="my-4 font-bold">
        <h1>{jobs.length} Jobs Found</h1>
      </div>

      {/* 🌀 Show loader or empty message or job list */}
      {loading ? (
        <p className="text-blue-600 font-semibold">Loading jobs... 🌀</p>
      ) : jobs.length === 0 ? (
        <p className="text-red-600 font-semibold">No jobs found ❌</p>
      ) : (
        <div className="grid grid-cols-3 gap-3">
          {jobs.map((job) => (
            <div key={job._id}>
              <JobBox {...job} />
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default AllJobs;
