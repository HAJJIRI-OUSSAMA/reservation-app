import * as dest from "../services/destination_service.js";

export async function createDestination(req, res) {
    try {
        const destination = await dest.addDestination(req.body);
        res.status(201).json(destination);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function allDestinations(req, res) {
    try {
        const destinations = await dest.getDestinations();
        res.json(destinations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function deleteDestination(req, res) {
    try {
        const result = await dest.deleteDest(req.params.id);
        if (result) {
            res.status(204).json(result);
        } else {
            res.status(404).json();
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function updateDestination(req, res) {
    try {
        const updatedDestination = await dest.
            updateDestination(req.params.id, req.body);
        res.status(200).json(updatedDestination);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}

export async function searchDestination(req, res) {
    try {
        const destinations = await dest.findDestination(req.query);
        res.json(destinations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}