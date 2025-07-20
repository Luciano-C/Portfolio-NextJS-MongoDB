import { dbConnect } from "../../../database/mongoose";
import Project from "../../../models/project";

export default async function handler(req, res) {
  try {
    await dbConnect();

    const { id, api_key } = req.query;

    if (api_key !== process.env.API_SECRET_KEY) {
      return res.status(401).json({ msg: "You are not authorized to call this API." });
    }

    switch (req.method) {
      case "GET":
        const project = await Project.findById(id);
        if (!project) {
          return res.status(404).json({ msg: "Project not found" });
        }
        return res.status(200).json(project);

      default:
        return res.status(400).json({ msg: "This method is not supported" });
    }
  } catch (error) {
    console.error("API error:", error);
    return res.status(500).json({ error: error.message || "Internal Server Error" });
  }
}
