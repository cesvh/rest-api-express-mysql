const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({"user": {"id": 1}});
});

module.exports = router;
