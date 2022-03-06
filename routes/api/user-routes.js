const router = require('express').Router();
const { User } = require('../../model');
const { getUsers, addUsers, getUserById, updateUser, deleteUser } = require('../../controller/user-controller');

router
    .route('/')
    .get(getUsers)
    .post(addUsers);

router
    .route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;