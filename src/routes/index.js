var express = require('express');
const { index, listar, search,admin, nosotros} = require('../controllers/indexController');
const checkUserAdmin = require('../middlewares/checkUserAdmin');
const checkUserLogin = require('../middlewares/checkUserLogin');
var router = express.Router();

/* llego con: / */
router.get('/', index);
router.get('/admin',checkUserAdmin ,admin)
router.get('/libros', listar)
router.get('/search', search)
router.get('/nosotros', nosotros)

module.exports = router;
