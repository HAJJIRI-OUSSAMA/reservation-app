import * as reserv from "../services/reservation_service.js";

export async function addReservation(req, res) {
    try {
        const reservation = await reserv.createReservation(req.body);
        res.status(201).json(reservation);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function allReservation(req, res) {
    try {
        const reservation = await reserv.getAllReservation();
        res.status(200).json(reservation);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function reservationById(req, res) {
    try {
        const reservation = await reserv.
            getReservationById(req.params.id);
        if (!reservation) return res.status(404).
            json({ error: "Reservation not found" });
        res.status(200).json(reservation);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function updateReservation(req, res) {
    try {
        const reservation = await reserv.
            update(req.params.id, req.body);
        if (!reservation) return res.status(404).
            json({ error: "Reservation not found" });
        res.status(200).json(reservation);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function deleteReservation(req, res) {
    try {
        const reservation = await reserv.
            deleteReserv(req.params.id);
        if (!reservation) return res.status(404).
            json({ error: "Reservation not found" });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
