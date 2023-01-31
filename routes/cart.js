const express = require('express');
const { cart } = require('../controllers/cartController');
const router = express.Router();

/* /cart */
router.get('/cart', cart);

module.exports = router;
