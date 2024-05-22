const express = require('express');

const { getInbox } = require('../controller/inboxController');
const decorateHTMLResponse = require('../middlewares/common/decorateHTMLResponse');

const router = express.Router();

// route
router.get('/', decorateHTMLResponse('Inbox'), getInbox);

module.exports = router;
