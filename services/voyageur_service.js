import VoyageurModel from "../models/voyageur_model.js";

export async function addVoyageur(v) {
    return await VoyageurModel.create(v);
}

export async function getVoyageurs() {
    return await VoyageurModel.find({});
}

export async function getVoyageurById(id) {
    return await VoyageurModel.findById(id);
}

export async function modifierVoyageur(id, v) {
    return await VoyageurModel.findByIdAndUpdate(id, v, { new: true });
}

export async function supprimerVoyageur(id) {
    return await VoyageurModel.findByIdAndDelete(id);
}

export async function getVoyageursByName(name) {
    return await VoyageurModel.find({ nom: new RegExp(name, "i") });
}