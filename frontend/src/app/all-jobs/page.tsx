"use client";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import SearchForm from "../components/SearchForm";
import axios from "axios";
import JobBox from "../components/JobBox";

const allJobs = () => {
  const [jobs, setJobs] = React.useState([]);
  useEffect(() => {
      console.log("Jobs updated:", jobs);
    }, [jobs]);
  const handleSearch = async (filters) => {
    console.log("Search Filters:", filters);
    try {
      console.log(process.env.NEXT_PUBLIC_URI);
      
      const response = await axios.get(`${process.env.NEXT_PUBLIC_URI}/jobs`, {
        params: filters,
        headers: {
             Authorization: `Bearer ${localStorage.getItem("token")}`,
           },
      });
      setJobs(response.data);
    } catch (error) {
      console.error("error fetching jobs:", error);
    }
  };
  return (
    <Layout>
      <SearchForm onSearch={handleSearch} />
      <div className="my-4 font-bold">
        <h1>{jobs.length} Jobs Found</h1>
      </div>
      {/* <JobBox/> */}
      <div className="grid grid-cols-3 gap-3">
        {jobs.map((job)=>{
          return (
            <div key={job._id}>
              <JobBox {...job} />
            </div>
          )
        })}
      </div>
    </Layout>
  );
};

export default allJobs;
