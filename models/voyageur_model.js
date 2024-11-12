import mongoose from 'mongoose';

const voyageurSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telephone: {
        type: Number,
        required: false
    },

})
const VoyageurModel = mongoose.
    model('voyageur_model', voyageurSchema);
export default VoyageurModel;