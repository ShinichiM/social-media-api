const router = require('express').Router();
const { getThoughts, getSingleThought, addThought, updateThought, deleteThought } = require('../../controller/thought-controller');

router.route('/')
    .get(getThoughts)

router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)

router.route('/:userId')
    .post(addThought)

module.exports = router;