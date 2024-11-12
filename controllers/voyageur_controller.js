import * as voyageur from "../services/voyageur_service.js";

export async function ajouterVoyageur(req, res) {
    try {
        const v = await voyageur.addVoyageur(req.body);
        res.status(201).json(v);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function allVoyageur(req, res) {

    try {
        const v = await voyageur.getVoyageurs();
        res.json(v);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function voyageurById(req, res) {

    try {
        const v = await voyageur.getVoyageurById(req.params.id);
        if (!v) {
            return res.status(404).
            json({ message: "Voyageur not found" });
        }
        res.json(v);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function updateVoyageur(req, res) {
    try {
        const v = await voyageur.
        modifierVoyageur(req.params.id, req.body);
        if (!v) {
            return res.status(404).
            json({ message: "Voyageur not found" });
        }
        res.json(v);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function deleteVoyageur(req, res) {
    try {
        const v = await voyageur.supprimerVoyageur(req.params.id);
        if (!v) {
            return res.status(404).
            json({ message: "Voyageur not found" });
        }
        res.json(v);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function voyageurByName(req, res) {
    try {
        const v = await voyageur.getVoyageursByName(req.params.name);
        if (!v) {
            return res.status(404).
            json({ message: "Voyageur not found" });
        }
        res.json(v);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}