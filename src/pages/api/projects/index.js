import { dbConnect } from "../../../utils/mongoose"
import Project from "../../../models/project"

dbConnect();

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            try {
                const projects = await Project.find();
                return res.status(200).json(projects);
            } catch (error) {
                return res.status(500).json({error: error.message});
            }
        default:
            return res.status(400).json({msg: "This method is not supported"});
    }
}