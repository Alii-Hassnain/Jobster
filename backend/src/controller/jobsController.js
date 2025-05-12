const Job = require("../model/jobsModel")

const getJob = async (req,res) =>{
    try {
        const jobs = await Job.find({})
        console.log(jobs);
        
        res.status(200).json({jobs})
    } catch (error) {
        res.status(500).json({
            error:"Failed to get jobs"
        })
    }
}

const createJob = async (req,res) => {
    try {
        console.log(req.body)
        const {position,company , location , status,type} = req.body;
        if(!position || !company){
            return res.status(400).json({
                msg:"position and company is required"
            })
        }
        const job = await Job.create({position,company,jobLocation:location,jobStatus:status,jobType:type});
        res.status(201).json(job);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg:"failed to create job"})
    }

}

const updateJob = async (req,res) =>{
    try {
        const {id} = req.params;
        console.log(req.body)
        const updateJob = await Job.findByIdAndUpdate(id,req.body,
        {
            new:true,
            runValidators: true,
        })
        console.log(updateJob)
        if(!updateJob){
            res.status(404).json({
                error:"job not found"
            })
        }
        res.status(200).json(updateJob)
    } catch (error) {
        res.status(500).json({ error: "Failed to update job" });
    }

}

const deleteJob = async (req,res) => {
    try {
        const { id } = req.params;
        const deletedJob = await Job.findByIdAndDelete(id);
    
        if (!deletedJob) {
          return res.status(404).json({ error: "Job not found" });
        }
    
        res.status(200).json({ message: "Job deleted successfully" });
      } catch (error) {
        res.status(500).json({ error: "Failed to delete job" });
      }
}

module.exports = {
    getJob,
    createJob,
    updateJob,
    deleteJob
}