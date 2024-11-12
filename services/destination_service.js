import DestinationModel from "../models/destination_model.js";

export async function addDestination(dest) {
    return await DestinationModel.create(dest);
}

export async function getDestinations() {
    return await DestinationModel.find();
}

export async function updateDestination(idD, dest) {
    return await DestinationModel.findByIdAndUpdate(idD, dest);
}

export async function deleteDest(idD) {
    return await DestinationModel.findByIdAndDelete(idD);
}

export async function findDestination(query) {
    const searchObj = {};

    // Search by "nom" (name)
    if (query.nom) {
        searchObj.nom = { $regex: query.nom, $options: "i" }; // Case-insensitive search
    }
    if (query.pays) {
        searchObj.pays = { $regex: query.pays, $options: "i" };
    }

    return await DestinationModel.find(searchObj);
}

