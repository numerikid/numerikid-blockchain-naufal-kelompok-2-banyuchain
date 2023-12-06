const express = require('express');
const router = express.Router();
const traceability_controller = require('../controllers/traceability_controller');

router.post('/setRoleAndUser', traceability_controller.setRoleAndUser);
router.get('/getRoleAndSubject', traceability_controller.getRoleAndSubject);
router.post('/addBasicTraceData', traceability_controller.addBasicTraceData);
router.get('/getAddBasicTraceData', traceability_controller.getAddBasicTraceData);
router.get('/getTraceData', traceability_controller.getTraceData);


module.exports = router;

