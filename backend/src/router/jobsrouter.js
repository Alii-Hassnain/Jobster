const express = require("express")
const router = express.Router()
const {
    getJob,
    createJob,
    updateJob,
    deleteJob
} = require("../controller/jobsController")
router.get("/jobs",getJob).post("/jobs",createJob).put("/jobs/:id",updateJob).delete("/jobs/:id",deleteJob);
module.exports = router