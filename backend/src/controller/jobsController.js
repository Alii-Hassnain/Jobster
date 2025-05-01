const Job = require("../model/jobsModel")

const getJob = (req,res) =>{
    try {
        const jobs = Job.find()
        res.status(200).json({jobs})
    } catch (error) {
        res.status(500).json({
            error:"Failed to get jobs"
        })
    }
}

const createJob = async (req,res) => {
    try {
        const {position,company , jobType , jobStatus} = req.body;
        if(!position || !company){
            return res.status(400).json({
                msg:"position and company is required"
            })
        }
        const job = await Job.create({position,company,jobType,jobStatus});
        res.status(201).json(job);
    } catch (error) {
        res.status(500).json({msg:"failed to create job"})
    }

}

const updateJob = async (req,res) =>{
    try {
        const {id} = req.params;
        const updateJob = await Job.findByIdAndUpdate(id,req.body,{new:true})
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