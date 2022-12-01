const router = require('express').Router();

const {
    getThought,
    getSingleThought,
    createThought, 
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughts');

// api thoughts
router.route('/').get(getThought).post(createThought);

//get thoughts by id, put, delete
router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

//reaction post and delete
router.route('/:thoughtId/reactions')
    .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;