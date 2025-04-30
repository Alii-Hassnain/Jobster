"use client"
import React from 'react'
import Layout from '../components/Layout'
import SearchForm from "../components/SearchForm";

const allJobs = () => {
    const handleSearch = (filters) => {
        console.log("Search Filters:", filters);
      };
  return (
    <Layout>
        <SearchForm onSearch={handleSearch} />  
    </Layout>
  )
}

export default allJobs