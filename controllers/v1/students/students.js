const pool = require('./../../../db/db_connection');

exports.createNewStudent = async (req, res) => {
	let name = req.body.name;
	if (name) {
		if (!isNaN(name)) {
			return res.status(400).send('Name is invalid!');
		} else {
			pool.query(`INSERT INTO student(name) VALUES('${name}')`)
				.then((results) => {
					return res.status(201).send(results);
				})
				.catch((error) => {
					return res.status(400).send(error);
				});
		}
	} else {
		return res.status(400).send('Name is required!');
	}
};

exports.getStudentById = async (req, res) => {
	let registration_number = req.params.studentId;
	if (!isNaN(registration_number)) {
		pool.query(`SELECT * FROM student WHERE registration_number = ${registration_number}`)
			.then((results) => {
				return res.status(200).send(results);
			})
			.catch((error) => {
				return res.status(400).send(error);
			});
	} else {
		return res.status(400).send('StudentId is invalid!');
	}
};