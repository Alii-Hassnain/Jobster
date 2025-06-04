"use client";

import React from "react";
import Layout from "../components/Layout";
import AddJobForm from "../components/AddJobForm";
import axios from "axios";
import { useState, useEffect } from "react";
const addJobs = () => {
  const [initialData, setInitialData] = useState(null);
  useEffect(() => {
    const storedData = localStorage.getItem("editJobData");
    console.log(storedData)
    if (storedData) {
      setInitialData(JSON.parse(storedData));
    }
  }, []);
 
  const handleJobSubmit = async (jobData) => {
    console.log("Submitted Job:", jobData);
    try {
      if (initialData?._id) {
        const res = await axios.put(
          `${process.env.NEXT_PUBLIC_URI}/jobs/${initialData._id}`,
          jobData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log("Job updated ✅", res.data);
      } else {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_URI}/jobs`,
          jobData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log("Job added ✅", res.data);
      }
      localStorage.removeItem("editJobData"); // Clean localStorage
    } catch (error) {
      console.error("Error:", error);
    }
    // You can now send jobData to your backend or Redux store
  };
  return (
    <Layout>
      
      <AddJobForm onSubmit={handleJobSubmit} job={initialData} />
    </Layout>
  );
};
export default addJobs;
