import express from 'express';
import { MovieCreate, MovieDelete, MovieDetails, MovieIndex, MovieUpdate } from '../controllers/movies.controller.js';

const router = express.Router();

//MVC - Module View Controller
// R - For Reading movies
router.get('/', MovieIndex);

router.get("/:id", MovieDetails);

// C - For creating movies
router.post('/', MovieCreate);

// U - For Update movie
router.put('/:id', MovieUpdate);


// D - For Deleting movie
router.delete('/:id', MovieDelete);

export default router;