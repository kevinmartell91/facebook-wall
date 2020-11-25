const router = require('express-promise-router')(); 
const {
    getPosts, getPostById, replacePost, newPost, 
    updatePost ,deletePost
 } = require('../controllers/post.controller')

router.get('/', getPosts);
router.post('/', newPost);
router.get('/:postId', getPostById);
router.put('/:postId',replacePost);

router.patch('/:postId',updatePost);
router.delete('/:postId',deletePost);

module.exports = router;