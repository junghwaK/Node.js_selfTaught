const express = require('express');
const search = require('../controllers/SearchControllers.js');
const router = express.Router();

router.get('/', search.register);
router.get('/Search', search.getInfo);
router.post('/Search/insert', search.postInsert);