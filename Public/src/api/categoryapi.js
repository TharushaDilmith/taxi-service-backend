const express = require('express');
const router = express.Router();
const controller = require('../controllers/categorycontroller');

module.exports = function () {
    router.post('/add',controller.addCategory);
    router.get('/',controller.getCategories);
    router.get('/:id',controller.getVehiclesInCategory);
    return router;
    
}