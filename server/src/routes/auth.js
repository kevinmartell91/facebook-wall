const router = require('express-promise-router')(); 
const { 
    signin, signup
} = require('../controllers/auth.controller');

router.post('/signin', signin);
router.post('/signup', signup);

module.exports = router;