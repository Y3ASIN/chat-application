const express = require('express');

const { getUsers } = require('../controller/usersController');
const decorateHTMLResponse = require('../middlewares/common/decorateHTMLResponse');

const router = express.Router();

// route
router.get('/', decorateHTMLResponse('Users'), getUsers);

module.exports = router;
