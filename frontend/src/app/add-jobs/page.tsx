"use client"

import React from 'react'
import Layout from '../components/Layout'
import AddJobForm from '../components/AddJobForm'

const addJobs = () => {
    const handleJobSubmit = (jobData) => {
        console.log("Submitted Job:", jobData);
        // You can now send jobData to your backend or Redux store
      };
  return (
    <Layout>
        <AddJobForm onSubmit={handleJobSubmit} />
    </Layout>
  )
}

export default addJobs