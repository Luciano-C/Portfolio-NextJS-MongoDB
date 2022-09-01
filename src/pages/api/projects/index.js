import { dbConnect } from "../../../database/mongoose"
import Project from "../../../models/project"

dbConnect();

export default async function handler(req, res) {

    if (req.query.api_key !== process.env.API_SECRET_KEY) {
        return res.status(401).json({ msg: "You are not authorized to call this API." })
    }

    switch (req.method) {
        case "GET":
            try {
                const projects = await Project.find().sort({ index: "ascending" });
                return res.status(200).json(projects);
            } catch (error) {
                return res.status(500).json({ error: error.message });
            }
        default:
            return res.status(400).json({ msg: "This method is not supported" });
    }
}