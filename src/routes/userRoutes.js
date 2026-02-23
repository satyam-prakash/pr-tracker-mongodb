const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User routes
router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/github/:githubId', userController.getUserByGithubId);
router.get('/:id', userController.getUserById);
router.put('/github/:githubId', userController.updateUser);
router.delete('/github/:githubId', userController.deleteUser);

module.exports = router;
