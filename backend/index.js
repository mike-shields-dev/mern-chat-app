const app = require('./src/server.js');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));