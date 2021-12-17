const express = require('express');
const router = express.Router();
const connection = require('../databases/databases');

router.get('/', (req, res) => {
    connection.query('SELECT * FROM `users`;', (err, results, fields) => {
        if (err) throw err;
        // console.log(results);
        res.json(results);
    });
});
router.get('/:id', (req, res) => {
    const { id } = req.params;
    connection.query(`SELECT * FROM users WHERE id = ${id};`, (err, results, fields) => {
        if (err) throw err;
        // console.log(results);
        res.json(results);
    });
});

module.exports = router;
