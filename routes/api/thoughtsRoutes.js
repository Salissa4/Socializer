const router = require('express').Router();

const {
    getThought,
    getSingleThought,
    createThought, 
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/');

//
router.route('/').get(getThought).post(createThought);

//get thoughts by id, put, delete
router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

//reaction post and delete
router.route('/:thoughtId/reactions')
    .post(createReaction);

router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;