const express = require('express');
const router = express.Router();
const studentsController = require('./../../controllers/v1/students/students');

router.get('/v1/students/', (req, res, next) => {
	return res.status(400).send('StudentId is required!');
});
router.get('/v1/students/:studentId', studentsController.getStudentById);
router.post('/v1/students/', studentsController.createNewStudent);

module.exports = router;