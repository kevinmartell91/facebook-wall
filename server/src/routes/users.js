const router = require('express-promise-router')(); 
const { 
    getUsers, newUser, getUserById, newUserPost, 
    getUserPosts, deleteUser,updateUserPost, deleteUserPost
} = require('../controllers/user.controller');

router.get('/', getUsers);
router.post('/', newUser);
router.get('/:userId', getUserById);
router.delete('/:userId', deleteUser);

router.get('/:userId/posts', getUserPosts);
router.post('/:userId/posts', newUserPost);

router.patch('/:userId/posts/:postId', updateUserPost);
router.delete('/:userId/posts/:postId', deleteUserPost);


module.exports = router;