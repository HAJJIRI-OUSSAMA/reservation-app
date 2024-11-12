import express from 'express';
import { addReservation, allReservation, deleteReservation, reservationById, updateReservation } from "../controllers/reservation_controller.js"
const router = express.Router();

router.route('/').
    get(allReservation)
    .post(addReservation);

router.route('/:id').
    get(reservationById).
    put(updateReservation).
    delete(deleteReservation);

export default router;