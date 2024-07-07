const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the project directory
app.use(express.static(__dirname));

// Listen on the specified port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

