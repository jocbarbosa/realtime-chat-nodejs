require('dotenv/config');
const express = require('express');
const app = express();
const path = require('path');

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT}`)
});