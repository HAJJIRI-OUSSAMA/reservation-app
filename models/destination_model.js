import mongoose from "mongoose"

const destSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    pays: {
        type: String,
        required: true
    },
    prixParNuit: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    }
})

const DestinationModel = mongoose.
    model('destination_model', destSchema);

export default DestinationModel;