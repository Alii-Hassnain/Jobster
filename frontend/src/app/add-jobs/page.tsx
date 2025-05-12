"use client"

import React from 'react'
import Layout from '../components/Layout'
import AddJobForm from '../components/AddJobForm'
import axios from 'axios'


const addJobs = () => {
    const handleJobSubmit = async (jobData) => {
        console.log("Submitted Job:", jobData);
        try {
          const res = await axios.post("http://localhost:5000/api/jobs",jobData);
          console.log("Job created successfuly",res.data);
        } catch (error) {
          console.log(error)
        }
        // You can now send jobData to your backend or Redux store
      };
  return (
    <Layout>
        <AddJobForm onSubmit={handleJobSubmit} />
    </Layout>
  )
}

export default addJobs