import mongoose from "mongoose"
import DestinationModel from "./destination_model.js";

const resSchema = new mongoose.Schema({
    destinationId: {
        type: mongoose.Types.ObjectId,
        ref: "destination_model"
    },
    voyageurId: {
        type: mongoose.Types.ObjectId,
        ref: 'voyageur_model'
    },
    dateDebut: {
        type: Date,
        required: true
    },
    dateFin: {
        type: Date,
        required: true
    },
    nombrePersonnes: {
        type: Number,
        required: true,
        default: 0,
    }, prixTotal: {
        type: Number,
        required: true,
    }

});


const ReservationModel = mongoose.model('reservation_model', resSchema);

export default ReservationModel;




// --------- exemple d'utilisation ----------

// import ReservationModel from './models/Reservation.js';
// const nouvelleReservation = new ReservationModel({
//   destinationId: "6465abc123def4567890",
//   voyageurId: "7890abc456def1234567",
//   dateDebut: new Date("2024-12-01"),
//   dateFin: new Date("2024-12-10"),
//   nombrePersonnes: 2
// });

// await nouvelleReservation.save();

// console.log(`Prix total calculé : ${nouvelleReservation.prixTotal}€`);