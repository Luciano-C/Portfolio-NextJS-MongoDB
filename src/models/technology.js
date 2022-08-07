import { Schema, model, models } from "mongoose";

const technologySchema = new Schema ({
    name: {
        type: String,
        required: [true, "Name is required"],
        unique: true,
        trim: true,
        maxlength: 40
    },
    link: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500
    },
    status: {
        type: String,
        required: true,
        trim: true,
        maxlength: 10
    }

}, {
    timestamps: true,
    // Mongoose crea un campo __uv, con versionKey: false se desactiva
    versionKey: false
})

// Si no está el modelo se crea, si ya está se exporta directamente.
export default models.Technology || model("Technology", technologySchema)