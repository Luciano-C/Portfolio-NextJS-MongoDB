import { Schema, model, models } from "mongoose";

const projectSchema = new Schema({

    nombre: {
        type: String,
        // Con el arreglo manda "Nombre is required" cuando hay error
        required: [true, "Nombre is required"],
        unique: true,
        // Quita los espacios al final y al inicio cuando guarda
        trim: true,
        maxlength: [40, "Nombre must be less than 40 characters"]
    },

    name: {
        type: String,
        // Con el arreglo manda "Nombre is required" cuando hay error
        required: [true, "Name is required"],
        unique: true,
        // Quita los espacios al final y al inicio cuando guarda
        trim: true,
        maxlength: [40, "Name must be less than 40 characters"]
    },

    descripcion: {
        type: String,
        required: true,
        trim: true,
        maxlength: [2000, "Descripcion must be less than 2000 characters"]
    },

    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: [2000, "Description must be less than 2000 characters"]
    },

    imagen_card: {
        type: String,
        required: true,
    },

    imagenes_carousel: {
        type: [String],
        required: true,
    },
    tags: {
        type: [String],
        required: true
    },
    link: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    // Mongoose crea un campo __uv, con versionKey: false se desactiva
    versionKey: false
})

// Si no está el modelo se crea, si ya está se exporta directamente.
export default models.Project || model("Project", projectSchema)


