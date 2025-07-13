import express from 'express';

const router = express.Router();

// /movies/movies
// R - For Reading movies
router.get('/', (req, res) => {
     res.send('Get All movie lists')
});

// C - For creating movies
router.post('/', (req, res) =>{
     res.send('Create a movie')

});

// U - For Update movie
router.put('/:id', (req, res) => {
     res.send('Update a movie')

});

// D - For Deleting movie
router.delete('/:id', (req, res) => {
     res.send('Delete a movie')
    
});
 
export default router;