const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const router = require('./routes/index');

// Setting

// Middleware
app.use(express.json());

// Routes
app.use(router);

app.listen(PORT, () => {
    console.log(`running on: http://localhost:${PORT}`);
});
