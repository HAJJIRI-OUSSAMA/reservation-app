import express from 'express';
import { createDestination, allDestinations, deleteDestination, updateDestination, searchDestination } from "../controllers/destination_controller.js";

const router = express.Router();

router.route("/").
    get(allDestinations).
    post(createDestination);

router.route("/:id").
    get(searchDestination).
    put(updateDestination).
    delete(deleteDestination);

export default router;