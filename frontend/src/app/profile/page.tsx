"use client"
import React from 'react'
import Layout from '../components/Layout'
import ProfileForm from '../components/ProfileForm';

const profile = () => {
    const handleProfileSave = (profileData) => {
        console.log("Profile Saved:", profileData);
        // Send to API or store in DB
      };
  return (
    <Layout>
        <ProfileForm onSave={handleProfileSave} />
    </Layout>
  )
}

export default profile