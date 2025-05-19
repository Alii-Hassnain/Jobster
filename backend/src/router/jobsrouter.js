const express = require("express")
const router = express.Router()
const { protect } = require("../middleware/authMiddleware")
const {
    getJob,
    createJob,
    updateJob,
    deleteJob
} = require("../controller/jobsController")
router.get("/jobs",protect,getJob).post("/jobs",protect,createJob).put("/jobs/:id",updateJob).delete("/jobs/:id",deleteJob);
module.exports = router