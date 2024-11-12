import DestinationModel from "../models/destination_model.js";
import ReservationModel from "../models/reservation_model.js";
import VoyageurModel from "../models/voyageur_model.js";

export const createReservation = async (data) => {
    const { destinationId, voyageurId, dateDebut, dateFin, nombrePersonnes } = data;

    // Vérifier si la destination existe
    const destination = await DestinationModel.findById(destinationId);
    if (!destination) {
        throw new Error('Destination introuvable.');
    }

    // Vérifier si le voyageur existe
    const voyageur = await VoyageurModel.findById(voyageurId);
    if (!voyageur) {
        throw new Error('Voyageur introuvable.');
    }

    // Calcul de la durée du séjour
    const dureeSejour = (new Date(dateFin) - new Date(dateDebut)) / (1000 * 60 * 60 * 24);
    if (dureeSejour <= 0) {
        throw new Error('La date de fin doit être postérieure à la date de début.');
    }

    // Calcul du prix total
    const prixTotal = dureeSejour * destination.prixParNuit * nombrePersonnes;

    // Création de la réservation
    const reservation = new ReservationModel({
        ...data,
        prixTotal,
    });

    return await reservation.save();
};

export async function getAllReservation() {
    return await ReservationModel.find();
}

export async function getReservationById(idR) {
    return await ReservationModel.findById(idR);
}

export async function update(idR, updateData) {
    const { dateDebut, dateFin, nombrePersonnes } = updateData;

    // Fetch the existing reservation
    const reservation = await ReservationModel.findById(idR).populate("destinationId");
    if (!reservation) {
        throw new Error("Réservation non trouvée.");
    }

    // Calculate the new duration if dates are provided
    let durationInDays = (new Date(reservation.dateFin) - new Date(reservation.dateDebut)) / (1000 * 60 * 60 * 24);
    if (dateDebut && dateFin) {
        durationInDays = (new Date(dateFin) - new Date(dateDebut)) / (1000 * 60 * 60 * 24);
        if (durationInDays <= 0) {
            throw new Error("La date de fin doit être postérieure à la date de début.");
        }
    }

    // Recalculate `prixTotal`
    const prixTotal = reservation.destinationId.prixParNuit * durationInDays * (nombrePersonnes || reservation.nombrePersonnes);

    // Update the reservation with the new data
    return await ReservationModel.findByIdAndUpdate(
        idR,
        { ...updateData, prixTotal },
        { new: true }
    );

}

export async function deleteReserv(idR) {
    return await ReservationModel.findByIdAndDelete(idR);
}