import express from 'express';
import { ajouterVoyageur, allVoyageur, deleteVoyageur, updateVoyageur, voyageurById, voyageurByName } from "../controllers/voyageur_controller.js"

const router = express.Router();

router.route('/').get(allVoyageur).
    post(ajouterVoyageur);

router.route('/:id').get(voyageurById).
    put(updateVoyageur).
    delete(deleteVoyageur);

router.route('/nom/:nom').get(voyageurByName);

export default router;