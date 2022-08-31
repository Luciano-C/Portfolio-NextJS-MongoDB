import { dbConnect } from "../../../database/mongoose"
import Technology from "../../../models/technology"

dbConnect();

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            try {
                const technologies = await Technology.find().sort({ index: "ascending" });
                return res.status(200).json(technologies);
            } catch (error) {
                return res.status(500).json({error: error.message});
            }
        default:
            return res.status(400).json({msg: "This method is not supported"});
    }
}