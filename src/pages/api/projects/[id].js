import { dbConnect } from "../../../database/mongoose"
import Project from "../../../models/project"

dbConnect();


export default async function handler(req, res) {

    const { id } = req.query;

    if (req.query.api_key !== process.env.API_SECRET_KEY) {
        return res.status(401).json({msg: "You are not authorized to call this API."})
    }

    switch (req.method) {
        case "GET":
            try {
                const project = await Project.findById(id);
                if (!project) return res.status(404).json({ msg: "Project not found" })
                return res.status(200).json(project);
            } catch (error) {
                return res.status(500).json({ error: error.message });
            }
        default:
            return res.status(400).json({ msg: "This method is not supported" });

    }
}